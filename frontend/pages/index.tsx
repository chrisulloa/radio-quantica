import { getAllCategories, ShowData, getAllShowData } from "../lib/shows";
import ShowCard from "../components/showCard";
import CategoriesCard from "../components/categoriesCard";
import Head from "next/head";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import fuzzysort from "fuzzysort";
import debounce from "lodash/debounce";
import { NewsCard } from "../components/newsCard";
import {
  latestNewsQuery,
  archivePicksQuery,
} from "../lib/gql/documents/queries";
import client from "../lib/services/graphql";
import { ArchivesPicksQuery, NewsPostsQuery } from "../lib/gql/types/graphql";
import React from "react";
import { ArchiveCard } from "../components/archiveCard";
import { deviceIsMobile } from "../lib/deviceInfo";
import { SearchIcon } from "../components/searchIcon";

export async function getStaticProps() {
  const categories = await getAllCategories();
  const allShowData = await getAllShowData(true);
  const { data } = await client.query({
    query: latestNewsQuery,
    variables: { page: 1, limit: 3, sort: "-publishDate" },
    fetchPolicy: "no-cache",
  });
  const newsPosts = data.NewsPosts;
  const { data: picksData } = await client.query({
    query: archivePicksQuery,
    variables: {
      limit: 3,
      sort: "-date",
      where: {
        staffPick: {
          equals: true,
        },
      },
    },
    fetchPolicy: "no-cache",
  });
  const archivePicks = picksData.Archives;
  return {
    props: {
      categories,
      allShowData,
      newsPosts,
      archivePicks,
    },
  };
}

const HomePageHeader = () => {
  return (
    <Head>
      <title>San Diego Internet Radio - PARTICLE.FM</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@particlefm" />
      <meta name="twitter:title" content="PARTICLE.FM" />
      <meta
        name="twitter:description"
        content="Community Internet Radio San Diego"
      />
      <meta
        name="twitter:image"
        content="https://cdn.particle.fm/socials/particle-fm-socials-banner.jpg"
      />

      <meta property="og:site_name" content="PARTICLE.FM"></meta>
      <meta
        property="og:title"
        content="Community Internet Radio based in San Diego"
      ></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content="https://particle.fm/"></meta>
      <meta
        property="og:description"
        content="DIY Community Internet Radio based in San Diego for underrepresented artists"
      ></meta>
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
};

const ArchivePicksCards = (props: {
  archives: ArchivesPicksQuery["Archives"];
  isMobile: boolean;
}) => {
  const { archives } = props;
  if (!archives || !archives.docs) {
    return <div></div>;
  }
  return (
    <React.Fragment>
      {archives.docs.map((doc, i) => {
        if (doc && doc.fullTitle && doc.date) {
          return (
            <ArchiveCard
              key={doc?.id}
              archive={doc}
              showId={doc.show?.slug}
              index={i}
              isMobile={props.isMobile}
            ></ArchiveCard>
          );
        }
      })}
    </React.Fragment>
  );
};

const NewsCards = (props: { posts: NewsPostsQuery["NewsPosts"] }) => {
  const { posts } = props;
  if (!posts || !posts.docs) {
    return <div></div>;
  }
  return (
    <React.Fragment>
      {posts.docs.map((doc) => {
        if (doc && doc.title && doc.blurb) {
          return (
            <NewsCard
              key={doc.id}
              link={`/news/${doc.slug}`}
              newWindow={false}
              title={doc.title}
              description={doc.blurb}
              date={doc.publishDate}
            ></NewsCard>
          );
        }
      })}
    </React.Fragment>
  );
};

export default function Home({
  categories,
  allShowData,
  newsPosts,
  archivePicks,
}: {
  categories: string[];
  allShowData: ShowData[];
  newsPosts: NewsPostsQuery["NewsPosts"];
  archivePicks: ArchivesPicksQuery["Archives"];
}) {
  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(deviceIsMobile());
  }, []);
  const [shows, setShows] = useState<ShowData[]>(allShowData);
  const handleSearch = useCallback(
    (e: any) => {
      e.preventDefault();
      const val = e.target.value;
      if (val) {
        const results = fuzzysort.go(val, allShowData, {
          keys: ["host", "title", "description"],
          threshold: -25000,
        });
        setShows(results.map((r) => r.obj));
      } else {
        setShows(allShowData);
      }
    },
    [allShowData]
  );
  const debouncedResults = useMemo(() => {
    return debounce(handleSearch, 200);
  }, [handleSearch]);
  return (
    <div>
      <HomePageHeader></HomePageHeader>
      <div className="w-11/12 lg:w-9/12 2xl:w-7/12 md:ml-10 mx-auto my-3">
        <div className="flex justify-between mt-2">
          <h1 className="text-white">NEWS</h1>
          <Link
            href="/news"
            className="text-white hover:bg-white hover:text-black p-1"
          >
            MORE →
          </Link>
        </div>
        <div className="grid gap-5 w-full mt-5 mb-5 md:grid-cols-3 grid-cols-1">
          {newsPosts && <NewsCards posts={newsPosts}></NewsCards>}
        </div>
        <div className="flex justify-between">
          <h1 className="text-white">STAFF PICKS</h1>
        </div>
        <div className="grid gap-5 w-full mt-5 mb-8 md:grid-cols-3 grid-cols-1">
          {archivePicks && (
            <ArchivePicksCards
              archives={archivePicks}
              isMobile={isMobile}
            ></ArchivePicksCards>
          )}
        </div>
        <hr className="pt-5 h-4" />
      </div>
    </div>
  );
}
