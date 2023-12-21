import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NewsCard } from "../components/newsCard";
import {
  latestNewsQuery,
  archivePicksQuery,
  merchPreviewsQuery,
} from "../lib/gql/documents/queries";
import client from "../lib/services/graphql";
import {
  ArchivesPicksQuery,
  MerchPreviewsQuery,
  NewsPostsQuery,
} from "../lib/gql/types/graphql";
import React from "react";
import { ArchiveCard } from "../components/archiveCard";
import { deviceIsMobile } from "../lib/deviceInfo";
import { SearchIcon } from "../components/searchIcon";
import { MerchPreviewCard } from "../components/merchPreviewCard";

export async function getStaticProps() {
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
  const { data: merchPreviewsData } = await client.query({
    query: merchPreviewsQuery,
    variables: {
      limit: 3,
      sort: "-createdAt",
    },
    fetchPolicy: "no-cache",
  });
  const archivePicks = picksData.Archives;
  const merchPreviews = merchPreviewsData.MerchPreviews;
  return {
    props: {
      newsPosts,
      archivePicks,

      merchPreviews,
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

const MerchPreviewCards = (props: {
  merchPreviews: MerchPreviewsQuery["MerchPreviews"];
  isMobile: boolean;
}) => {
  const { merchPreviews } = props;
  if (!merchPreviews || !merchPreviews.docs) {
    return <div></div>;
  }
  return (
    <React.Fragment>
      {merchPreviews.docs.map((doc, i) => {
        if (doc && doc.title) {
          return (
            <MerchPreviewCard
              key={doc?.id}
              link={doc?.url}
              title={doc.title}
              blurb={doc.blurb}
              imageUrl={doc.image?.url}
            ></MerchPreviewCard>
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
              previewBannerUrl={doc.previewBanner?.url}
            ></NewsCard>
          );
        }
      })}
    </React.Fragment>
  );
};

export default function Home({
  newsPosts,
  archivePicks,
  merchPreviews,
}: {
  categories: string[];
  newsPosts: NewsPostsQuery["NewsPosts"];
  archivePicks: ArchivesPicksQuery["Archives"];
  merchPreviews: MerchPreviewsQuery["MerchPreviews"];
}) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(deviceIsMobile());
  }, []);

  return (
    <div>
      <HomePageHeader></HomePageHeader>
      <div className="w-11/12 lg:w-9/12 2xl:w-7/12 md:ml-10 mx-auto">
        <div className="flex justify-between">
          <h1 className="text-white">NEWS</h1>
          <Link
            href="/news"
            className="text-white hover:bg-white hover:text-black p-1"
          >
            MORE →
          </Link>
        </div>
        <div className="grid gap-5 w-full mb-5 md:grid-cols-3 grid-cols-1">
          {newsPosts && <NewsCards posts={newsPosts}></NewsCards>}
        </div>
        <div className="flex justify-between">
          <h1 className="text-white">STAFF PICKS</h1>
          <Link
            href="/latest"
            className="text-white hover:bg-white hover:text-black p-1"
          >
            MORE →
          </Link>
        </div>
        <div className="grid gap-5 w-full mb-8 md:grid-cols-3 grid-cols-1">
          {archivePicks && (
            <ArchivePicksCards
              archives={archivePicks}
              isMobile={isMobile}
            ></ArchivePicksCards>
          )}
        </div>
        <div className="flex justify-between">
          <h1 className="text-white">MERCH</h1>
          <Link
            href="https://particlefm.bandcamp.com/"
            target="_blank"
            className="text-white hover:bg-white hover:text-black"
          >
            MORE →
          </Link>
        </div>
        <div className="grid gap-5 w-full mb-8 md:grid-cols-3 grid-cols-1">
          {archivePicks && (
            <MerchPreviewCards
              merchPreviews={merchPreviews}
              isMobile={isMobile}
            ></MerchPreviewCards>
          )}
        </div>
      </div>
    </div>
  );
}
