import Head from "next/head";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import debounce from "lodash/debounce";
import { useLazyQuery } from "@apollo/client";
import { PaginatedLiveVideosQuery } from "../lib/gql/types/graphql";
import Pagination from "./pagination";
import Link from "next/link";
import VideoCard from "./videoCard";
import { defaultOgImage } from "../lib/utils";
import { paginatedVidsQuery } from "../lib/gql/documents/queries";
import { SearchIcon } from "./icons/searchIcon";

const SEARCH_LIMIT = 24;
const SEARCH_SKELETON_COUNT = 6;
const SEARCH_SKELETON_MIN_MS = 1000;

const VideoCardSkeleton = () => (
  <div className="animate-pulse">
    <div className="w-full aspect-video bg-dos-grey/20 rounded-sm"></div>
    <div className="h-4 bg-dos-grey/20 rounded-sm w-2/3 mx-auto mt-3"></div>
  </div>
);

const StreamsHeader = ({ page }: { page: number }) => {
  const title = `Streams - Page ${page} - Rádio Quântica`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@quanticaonline" />
      <meta name="twitter:title" content="Rádio Quântica | Streams" />
      <meta
        name="twitter:description"
        content="Rádio Quântica Stream Archive"
      />
      <meta name="twitter:image" content={defaultOgImage} />

      <meta property="og:site_name" content="Rádio Quântica"></meta>
      <meta property="og:title" content="Rádio Quântica Latest Streams"></meta>
      <meta property="og:type" content="website"></meta>
      <meta
        property="og:url"
        content="https://www.radioquantica.com/streams"
      ></meta>
      <meta property="og:description" content="Rádio Quântica Latest Streams" />
      <meta property="og:image" content={defaultOgImage}></meta>
      <meta property="og:image:secure_url" content={defaultOgImage}></meta>
      <meta property="og:image:width" content="1200"></meta>
      <meta property="og:image:height" content="630"></meta>
      <meta
        property="og:image:alt"
        content="Rádio Quântica Social Media Banner"
      ></meta>
      <meta property="og:image:type" content="image/jpg"></meta>
    </Head>
  );
};

type LiveVideo = NonNullable<
  PaginatedLiveVideosQuery["LiveVideos"]
>["docs"][number];

export default function VideosPage({
  vids,
  currentPage,
  totalPages,
}: {
  vids: LiveVideo[];
  currentPage: number;
  totalPages: number;
  pageSize: number;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchPage, setSearchPage] = useState(1);
  const isSearching = searchTerm.trim().length > 0;

  const [runSearch, { data: searchData, loading: searchLoading }] =
    useLazyQuery(paginatedVidsQuery, { fetchPolicy: "network-only" });

  const [minSkeletonElapsed, setMinSkeletonElapsed] = useState(true);
  const minSkeletonTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  const executeSearch = useCallback(
    (term: string, page: number) => {
      setMinSkeletonElapsed(false);
      clearTimeout(minSkeletonTimer.current);
      minSkeletonTimer.current = setTimeout(
        () => setMinSkeletonElapsed(true),
        SEARCH_SKELETON_MIN_MS,
      );
      runSearch({
        variables: {
          page,
          limit: SEARCH_LIMIT,
          sort: "-sortableId",
          where: { title: { like: term } },
        },
      });
    },
    [runSearch],
  );

  const debouncedSearch = useMemo(
    () =>
      // Only ever invoked from the search input's onChange handler, never
      // synchronously during render, so reading minSkeletonTimer.current
      // via executeSearch here is safe.
      // eslint-disable-next-line react-hooks/refs
      debounce((term: string) => {
        setSearchPage(1);
        if (term.trim()) {
          executeSearch(term, 1);
        }
      }, 600),
    [executeSearch],
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
      clearTimeout(minSkeletonTimer.current);
    };
  }, [debouncedSearch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchTerm(val);
    debouncedSearch(val);
  };

  const handleSearchPageClick = (page: number) => {
    setSearchPage(page);
    executeSearch(searchTerm, page);
  };

  const handleClearSearch = () => {
    debouncedSearch.cancel();
    clearTimeout(minSkeletonTimer.current);
    setSearchTerm("");
    setSearchPage(1);
  };

  if (!vids) {
    return <div className="text-white">Unable to load videos...</div>;
  }

  const searchResults = searchData?.LiveVideos?.docs ?? [];
  const displayedVids = isSearching ? searchResults : vids;
  const displayedTotalPages = isSearching
    ? (searchData?.LiveVideos?.totalPages ?? 1)
    : totalPages;

  return (
    <div className="md:ml-4 px-4 md:px-0 w-full md:w-10/12 lg:w-10/12 2xl:w-10/12 mb-5">
      <StreamsHeader page={currentPage}></StreamsHeader>
      <div className="flex justify-between mb-4">
        <h1 className="text-white">STREAMS</h1>
        {!isSearching && (
          <div className="text-white">
            {currentPage !== 1 && (
              <Link
                href={`/streams/page/${currentPage - 1}`}
                className="text-white hover:text-dos-grey"
              >
                ←
              </Link>
            )}
            &nbsp;&nbsp;
            {currentPage < totalPages && (
              <Link
                href={`/streams/page/${currentPage + 1}`}
                className="text-white hover:text-dos-grey"
              >
                →
              </Link>
            )}
          </div>
        )}
      </div>
      <form
        autoComplete="off"
        className="flex flex-row mt-2 mb-4 divide-white border-b border-white justify-end xl:w-3/5"
      >
        <input
          name="Search"
          className="text-white text-sm bg-black w-full focus:outline-hidden"
          placeholder="Search streams..."
          value={searchTerm}
          onChange={handleSearchChange}
        ></input>
        {isSearching && (
          <button
            type="button"
            onClick={handleClearSearch}
            aria-label="Clear search"
            className="text-white hover:text-dos-grey px-2 hover:cursor-pointer"
          >
            ×
          </button>
        )}
        <div className="tracking-wide rounded-sm text-sm text-white p-2">
          <SearchIcon></SearchIcon>
        </div>
      </form>
      <div className="grid lg:grid-cols-3 gap-6 text-white w-full mt-4">
        {isSearching && (searchLoading || !minSkeletonElapsed)
          ? Array.from({ length: SEARCH_SKELETON_COUNT }).map((_, i) => (
              <VideoCardSkeleton key={i}></VideoCardSkeleton>
            ))
          : displayedVids.map((doc) => {
              if (doc) {
                return <VideoCard key={doc.id} video={doc}></VideoCard>;
              }
            })}
        {isSearching &&
          !searchLoading &&
          minSkeletonElapsed &&
          searchResults.length === 0 && (
            <div>No streams found for &ldquo;{searchTerm}&rdquo;</div>
          )}
      </div>
      <div className="flex justify-center sm:ml-0 sm:justify-start w-full">
        {isSearching ? (
          <Pagination
            currentPage={searchPage}
            totalPages={displayedTotalPages}
            onPageClick={handleSearchPageClick}
          ></Pagination>
        ) : (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            renderPageLink={(page: number) => `/streams/page/${page}`}
          ></Pagination>
        )}
      </div>
    </div>
  );
}
