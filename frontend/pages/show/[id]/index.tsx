import { useQuery } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import ArchivesList from "../../../components/archivesList";
import Card from "../../../components/card";
import GoBackLink from "../../../components/goBack";
import { LoadingOverlay } from "../../../components/loadingOverlay";
import { LoadingSpinner } from "../../../components/loadingSpinner";
import { ShowContent } from "../../../components/showContent";
import { getAllShowIDs, getShowData, ShowData } from "../../../lib/shows";
import {
  getShowByFields,
  showArchivesQuery,
} from "../../../lib/gql/documents/queries";
import { ArchivesQuery } from "../../../lib/gql/types/graphql";

export async function getStaticPaths() {
  const allShowIDs = await getAllShowIDs();
  const paths = allShowIDs.map((show) => ({
    params: { id: show.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const show = await getShowData(params.id);
  if (!show) return { props: { showPageId: params.id } };
  const showNameAndHost = `${show.title} w/ ${show.host}`;
  const title = `${showNameAndHost} - PARTICLE.FM`;

  return {
    props: {
      showPageId: params.id,
      show,
      content: show.content,
      showNameAndHost,
      title,
    },
  };
}

export const PastShowsHeader = (props: { showTitle: string }) => {
  return (
    <div
      key={`${props.showTitle}-past-shows`}
      className="text-white text-base mb-2 tracking-wide"
    >
      PAST SHOWS
    </div>
  );
};

const updateQuery = (
  previousResult: ArchivesQuery,
  { fetchMoreResult }: { fetchMoreResult: ArchivesQuery }
) => {
  return Boolean(
    fetchMoreResult.Archives?.docs && fetchMoreResult.Archives?.docs.length
  )
    ? fetchMoreResult
    : previousResult;
};

export const PastShows = (props: { showTitle: string; showPageId: string }) => {
  const { showTitle, showPageId } = props;
  const showIdResult = useQuery(getShowByFields, {
    variables: { where: { slug: { equals: showPageId } } },
  });

  const showId =
    showIdResult.data?.Shows?.docs && showIdResult.data?.Shows?.docs[0]?.id;

  const { loading, error, data, fetchMore } = useQuery(showArchivesQuery, {
    skip: !showId,
    variables: {
      where: { show: { equals: showId } },
      limit: 5,
      sort: "-date",
      page: 1,
    },
    notifyOnNetworkStatusChange: true,
  });

  const fetchMoreWithUpdate = (variables: any) => {
    return fetchMore({ variables, updateQuery });
  };

  if (error || !data?.Archives?.docs || data?.Archives?.docs.length === 0)
    return <div></div>;

  return (
    <div className="relative col-span-4 mb-4">
      <div key={`${showTitle}-archives`} className="col-span-4 h-min">
        {loading && <LoadingOverlay delay={250} />}
        {loading && (
          <div className="absolute z-20 left-1/2 top-1/2">
            <LoadingSpinner delay={250} />
          </div>
        )}
        <PastShowsHeader showTitle={showTitle}></PastShowsHeader>

        <ArchivesList
          show={data}
          showPageId={showPageId}
          fetchMore={fetchMoreWithUpdate}
        />
      </div>
    </div>
  );
};

export default function Show({
  showPageId,
  show,
  content,
  title,
  showNameAndHost,
}: {
  showPageId: string;
  show: ShowData;
  content: any;
  title: string;
  showNameAndHost: string;
}) {
  const router = useRouter();

  return (
    <div className="mx-5 sm:ml-10 grid grid-cols-4 md:w-5/6 lg:w-3/6">
      <Head>
        <title>{title}</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@particlefm" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={title} />
        <meta
          name="twitter:image"
          content="https://cdn.particle.fm/socials/particle-fm-socials-banner.jpg"
        />

        <meta property="og:site_name" content="PARTICLE.FM"></meta>
        <meta property="og:title" content={title}></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:url"
          content={`https://particle.fm${router.asPath}`}
        ></meta>
        <meta property="og:description" content={title} />
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
      <div className="col-span-4">
        <Card>{showNameAndHost}</Card>
      </div>
      <ShowContent content={content} />
      <PastShows showTitle={show.title} showPageId={showPageId}></PastShows>
      <div className="col-span-4 text-white my-4">CATEGORIES</div>
      <div className="col-span-4 flex flex-wrap gap-y-5 gap-x-5">
        {show.categories.map((category) => {
          return (
            <Link
              href={`/categories/${category}`}
              key={category}
              className="text-center leading-tight w-fit h-fit px-5 py-1 border text-white border-white hover:bg-white hover:text-black"
            >
              {category}
            </Link>
          );
        })}
      </div>
      <div className="mt-8 mb-4 col-span-4">
        <GoBackLink fallback="/"></GoBackLink>
      </div>
    </div>
  );
}
