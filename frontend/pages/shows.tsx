import { useLazyQuery, useQuery } from "@apollo/client";
import { InView } from "react-intersection-observer";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { LoadingSpinner, Spinner } from "../components/loadingSpinner";
import Head from "next/head";
import GoBackLink from "../components/goBack";
import { ArchiveCard } from "../components/archiveCard";
import debounce from "lodash/debounce";
import { DownArrow, UpArrow } from "../components/showPageNavArrows";
import { deviceIsMobile } from "../lib/deviceInfo";
import {
  allArchivesQuery,
  searchHostsQuery,
} from "../lib/gql/documents/queries";
import { AllArchivesQuery } from "../lib/gql/types/graphql";
import { SearchIcon } from "../components/searchIcon";

const PAGE_SIZE = 9;
const MAX_ARRAY_LENGTH = PAGE_SIZE * 2;

const updateNextQuery =
  () =>
  (
    previousResult: AllArchivesQuery,
    { fetchMoreResult }: { fetchMoreResult: AllArchivesQuery }
  ) => {
    if (
      fetchMoreResult.Archives == null ||
      fetchMoreResult.Archives.docs == null ||
      fetchMoreResult.Archives.docs.length === 0
    )
      return previousResult;

    if (previousResult.Archives == null || previousResult.Archives.docs == null)
      return previousResult;

    fetchMoreResult.Archives.docs = [
      ...previousResult.Archives.docs,
      ...fetchMoreResult.Archives.docs,
    ];

    return fetchMoreResult;
  };

const ShowsPageHeader = () => (
  <Head>
    <title>Recent Shows - PARTICLE.FM</title>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@particlefm" />
    <meta name="twitter:title" content="PARTICLE.FM | Recent Shows" />
    <meta name="twitter:description" content="Particle FM Recent Shows" />
    <meta
      name="twitter:image"
      content="https://cdn.particle.fm/socials/particle-fm-socials-banner.jpg"
    />

    <meta property="og:site_name" content="PARTICLE.FM"></meta>
    <meta property="og:title" content="Particle FM Recent Shows"></meta>
    <meta property="og:type" content="website"></meta>
    <meta property="og:url" content="https://particle.fm/shows"></meta>
    <meta property="og:description" content="Particle FM Recent Shows" />
    <meta
      property="og:image"
      content="https://cdn.particle.fm/socials/particle-fm-socials-banner.jpg"
    ></meta>
    <meta
      property="og:image:secure_url"
      content="https://cdn.particle.fm/socials/particle-fm-socials-banner.jpg"
    ></meta>
    <meta property="og:image:width" content="1200"></meta>
    <meta property="og:image:height" content="630"></meta>
    <meta
      property="og:image:alt"
      content="Particle FM Social Media Banner"
    ></meta>
    <meta property="og:image:type" content="image/jpg"></meta>
  </Head>
);

const ArchiveCards = ({
  data,
  isMobile,
}: {
  data: AllArchivesQuery | undefined;
  isMobile: boolean;
}) => {
  const cards = data?.Archives?.docs?.map((doc, i) => {
    return (
      <ArchiveCard
        key={doc?.id}
        archive={doc}
        showId={doc?.show?.slug}
        index={i}
        isMobile={isMobile}
      ></ArchiveCard>
    );
  });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-white">
      {cards}
    </div>
  );
};

const ShowsPage = () => {
  const searchRef = useRef<HTMLInputElement>(null);
  const { data, loading, error, fetchMore, refetch } = useQuery(
    allArchivesQuery,
    {
      variables: { page: 1, limit: PAGE_SIZE, sort: "-date" },
      notifyOnNetworkStatusChange: true,
    }
  );

  const [selectedHost, setSelectedHost] = useState<string>();
  const [emptySearch, setEmptySearch] = useState<boolean>(true);
  const [searchVal, setSearchVal] = useState<string>();

  const handleHostButtonClick = useCallback(
    (hostId: string) => {
      if (hostId === selectedHost) {
        setSelectedHost(undefined);
        refetch({
          where: { fullTitle: { like: searchVal } },
          limit: PAGE_SIZE,
          page: 1,
          sort: "-date",
        });
      } else {
        setSelectedHost(hostId);
        refetch({
          where: { hosts: { in: [hostId] } },
          limit: PAGE_SIZE,
          page: 1,
          sort: "-date",
        });
      }
    },
    [selectedHost, setSelectedHost, refetch, searchVal]
  );

  const [
    searchHosts,
    {
      loading: searchLoading,
      error: searchError,
      data: searchHostsData,
      called,
    },
  ] = useLazyQuery(searchHostsQuery);

  const handleSearch = useCallback(
    (e: any) => {
      e.preventDefault();
      const val = e.target.value;
      setSelectedHost(undefined);
      if (val) {
        refetch({
          where: { fullTitle: { like: val } },
          limit: PAGE_SIZE,
          page: 1,
          sort: "-date",
        });
        searchHosts({
          variables: { where: { name: { like: val } }, limit: 10 },
        });
        setEmptySearch(false);
        setSearchVal(val);
      } else {
        refetch({
          where: undefined,
          limit: PAGE_SIZE,
          page: 1,
          sort: "-date",
        });
        setEmptySearch(true);
        setSearchVal(undefined);
      }
    },
    [refetch, searchHosts, setEmptySearch]
  );

  const debouncedSearch = useMemo(() => {
    return debounce(handleSearch, 800);
  }, [handleSearch]);

  const [debounceLoading, setDebounceLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const hasPrev = data?.Archives?.hasPrevPage;
  const hasNext = data?.Archives?.hasNextPage;
  const currentPage = data?.Archives?.page || 1;

  useEffect(() => {
    setIsMobile(deviceIsMobile());
  }, []);

  const inViewNextCallback = useCallback(
    async (inView: boolean) => {
      if (inView && hasNext && !debounceLoading) {
        setDebounceLoading(true);
        await debounce(async () => {
          await fetchMore({
            variables: {
              limit: PAGE_SIZE,
              page: currentPage + 1,
            },
            updateQuery: updateNextQuery(),
          });
          setDebounceLoading(false);
        }, 200)();
      }
    },
    [debounceLoading, setDebounceLoading, fetchMore, hasNext, currentPage]
  );

  const mobileNextCallback = useCallback(
    async (e: any) => {
      e.preventDefault();
      if (hasNext && !loading) {
        setDebounceLoading(true);
        await debounce(async () => {
          fetchMore({
            variables: {
              limit: PAGE_SIZE,
              page: currentPage + 1,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
              return fetchMoreResult;
            },
          });
          setDebounceLoading(false);
        }, 200)();
      }
    },
    [fetchMore, hasNext, loading, currentPage]
  );

  const mobilePrevCallback = useCallback(
    async (e: any) => {
      e.preventDefault();
      if (hasPrev && !loading) {
        setDebounceLoading(true);
        await debounce(async () => {
          fetchMore({
            variables: {
              limit: PAGE_SIZE,
              page: currentPage - 1,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
              return fetchMoreResult;
            },
          });
          setDebounceLoading(false);
        }, 200)();
      }
    },
    [currentPage, loading, fetchMore, hasPrev]
  );

  const isMobileAndNotLoading = isMobile && !loading && !debounceLoading;
  const isMobileAndLoading = isMobile && (loading || debounceLoading);

  return (
    <div className="px-5 sm:px-10 w-full md:w-10/12 xl:w-8/12 mb-5">
      <ShowsPageHeader></ShowsPageHeader>
      <div className="mb-4 flex w-full justify-between">
        <div className="text-white ">SEARCH</div>
      </div>
      <form
        autoComplete={"off"}
        id="chatInput"
        className="flex flex-row mb-8 divide-neon-green border border-white justify-end"
        onChange={debouncedSearch}
        onSubmit={(e: any) => {
          e.preventDefault();
          searchRef.current?.blur();
        }}
      >
        <input
          id="filterShows"
          name="Search"
          className="text-[16px] text-white p-2 ml-1 text-sm bg-black w-full focus:outline-none"
          ref={searchRef}
        ></input>
        <div className="tracking-widerounded text-sm text-neon-green p-2">
          <SearchIcon></SearchIcon>
        </div>
      </form>
      {!emptySearch &&
        searchHostsData &&
        searchHostsData.Hosts?.docs?.length !== 0 && (
          <div className="text-white ">HOSTS</div>
        )}
      {!emptySearch &&
        searchHostsData &&
        searchHostsData.Hosts?.docs?.length !== 0 && (
          <div className="my-5 col-span-4 flex flex-wrap mb-5 gap-y-5 gap-x-5">
            {searchHostsData.Hosts?.docs?.map((host) => {
              return (
                <button
                  key={host?.name}
                  onClick={() => handleHostButtonClick(host?.id as string)}
                  className={
                    host?.id === selectedHost
                      ? "text-center leading-tight w-fit h-fit px-5 py-1 border text-black bg-white border-white rounded focus:ring-white"
                      : "text-center leading-tight w-fit h-fit px-5 py-1 border text-white border-white hover:bg-white hover:text-black rounded"
                  }
                >
                  {host?.name}
                </button>
              );
            })}
          </div>
        )}
      <div className="mb-4 flex w-full justify-between">
        <div className="text-white">
          {called && !emptySearch ? "RESULTS" : "LATEST SHOWS"}
        </div>
        {!isMobile && emptySearch && <GoBackLink fallback="/"></GoBackLink>}
      </div>
      {isMobileAndLoading && (
        <div className="flex justify-center mx-auto w-full items-center pb-8">
          <LoadingSpinner delay={0} />
        </div>
      )}
      {isMobileAndNotLoading && hasPrev && (
        <button
          type="button"
          className="group w-full mb-5 flex justify-center border rounded-md borderwhite text-white"
          onClick={mobilePrevCallback}
        >
          <UpArrow />
        </button>
      )}
      {(!isMobile || isMobileAndNotLoading) &&
        data?.Archives?.docs?.length !== 0 && (
          <ArchiveCards data={data} isMobile={isMobile}></ArchiveCards>
        )}
      {(!isMobile || isMobileAndNotLoading) &&
        data?.Archives?.docs?.length === 0 && (
          <div className="text-white">
            Sorry, no results found. Try another search.
          </div>
        )}
      {isMobileAndNotLoading && hasNext && (
        <button
          type="button"
          className="mt-4 flex w-full justify-center group border px-11 rounded-md border-neon-green text-neon-green"
          onClick={mobileNextCallback}
        >
          <DownArrow />
        </button>
      )}
      {!isMobile && hasNext && (
        <div className="mt-4 w-full col-span-full flex justify-center text-white">
          <Spinner></Spinner>
          <InView threshold={0} onChange={inViewNextCallback} />
        </div>
      )}
    </div>
  );
};

export default ShowsPage;
