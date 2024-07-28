import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NewsCard } from "../components/newsCard";
import {
  labelReleasesQuery,
  latestNewsQuery,
  liveVideosQuery,
  merchQuery,
} from "../lib/gql/documents/queries";
import client from "../lib/services/graphql";
import {
  LabelReleasesQuery,
  LiveVideosQuery,
  MerchQuery,
  NewsPostsQuery,
} from "../lib/gql/types/graphql";
import React from "react";
import { deviceIsMobile } from "../lib/deviceInfo";
import { MerchCard } from "../components/merchCard";
import { LabelReleaseCard } from "../components/labelReleaseCard";
import Image from "next/image";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export async function getStaticProps() {
  const { data } = await client.query({
    query: latestNewsQuery,
    variables: { page: 1, limit: 3, sort: "-publishDate" },
    fetchPolicy: "no-cache",
  });
  const newsPosts = data.NewsPosts;
  const { data: merchData } = await client.query({
    query: merchQuery,
    variables: {
      limit: 3,
      sort: "-createdAt",
    },
    fetchPolicy: "no-cache",
  });
  const merch = merchData.Merches;
  const { data: labelReleasesData } = await client.query({
    query: labelReleasesQuery,
    variables: {
      limit: 3,
      sort: "-createdAt",
    },
    fetchPolicy: "no-cache",
  });
  const labelReleases = labelReleasesData.LabelReleases;
  const { data: liveVideosData } = await client.query({
    query: liveVideosQuery,
    variables: {
      limit: 2,
      sort: "-date",
    },
    fetchPolicy: "no-cache",
  });
  const liveVideos = liveVideosData.LiveVideos;
  return {
    props: {
      newsPosts,
      merch,
      labelReleases,
      liveVideos,
    },
  };
}

const HomePageHeader = () => {
  return (
    <Head>
      <title>Rádio Quântica</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@quanticaonline" />
      <meta name="twitter:title" content="Rádio Quântica" />
      <meta
        name="twitter:description"
        content="Online community radio station based in Lisbon, Portugal."
      />
      <meta
        name="twitter:image"
        content="https://radio-quantica.ams3.cdn.digitaloceanspaces.com/assets/radio_quantica_social_banner.jpg"
      />

      <meta property="og:site_name" content="Rádio Quântica"></meta>
      <meta
        property="og:title"
        content="Online community radio station based in Lisbon, Portugal."
      ></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content="https://radioquantica.com/"></meta>
      <meta
        property="og:description"
        content="Online community radio station based in Lisbon, Portugal."
      ></meta>
      <meta
        property="og:image"
        content="https://radio-quantica.ams3.cdn.digitaloceanspaces.com/assets/radio_quantica_social_banner.jpg"
      ></meta>
      <meta
        property="og:image:secure_url"
        content="https://radio-quantica.ams3.cdn.digitaloceanspaces.com/assets/radio_quantica_social_banner.jpg"
      ></meta>
      <meta property="og:image:width" content="1200"></meta>
      <meta property="og:image:height" content="630"></meta>
      <meta property="og:image:alt" content="Rádio Quântica Banner"></meta>
      <meta property="og:image:type" content="image/jpg"></meta>
    </Head>
  );
};

const MerchCards = (props: {
  merch: MerchQuery["Merches"];
  isMobile: boolean;
}) => {
  const { merch } = props;
  if (!merch || !merch.docs) {
    return <div></div>;
  }
  return (
    <React.Fragment>
      {merch.docs.map((doc, i) => {
        if (doc && doc.title) {
          return (
            <MerchCard
              key={doc?.id}
              link={doc?.url}
              title={doc.title}
              blurb={doc.blurb}
              imageUrl={doc.image?.url}
              soldOut={!!doc.soldOut}
            ></MerchCard>
          );
        }
      })}
    </React.Fragment>
  );
};

const LabelReleasesCards = (props: {
  labelReleases: LabelReleasesQuery["LabelReleases"];
  isMobile: boolean;
}) => {
  const { labelReleases } = props;
  if (!labelReleases || !labelReleases.docs) {
    return <div></div>;
  }
  return (
    <React.Fragment>
      {labelReleases.docs.map((doc, i) => {
        if (doc && doc.title) {
          return (
            <LabelReleaseCard
              key={doc?.id}
              link={doc?.url}
              title={doc.title}
              blurb={doc.blurb}
              imageUrl={doc.image?.url}
            ></LabelReleaseCard>
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

const VideoCard = (props: {
  video: {
    title: string;
    id?: string | null;
    url: string;
    image?: { url?: string | null } | null;
  };
}) => {
  const { video } = props;
  const videoId = new URL(video.url).pathname.replace("/embed/", "");

  return (
    <LiteYouTubeEmbed
      aspectHeight={9}
      aspectWidth={16}
      id={videoId}
      title={video.title}
    ></LiteYouTubeEmbed>
  );
};

const LiveVideos = (props: { liveVideos: LiveVideosQuery["LiveVideos"] }) => {
  const liveVideos = props.liveVideos;
  if (!liveVideos || !liveVideos.docs) {
    return <div></div>;
  }
  return (
    <React.Fragment>
      {liveVideos.docs.map((doc, index) => {
        if (doc && doc.id && doc.url) {
          return <VideoCard video={doc} key={index}></VideoCard>;
        }
      })}
    </React.Fragment>
  );
};

export default function Home({
  newsPosts,
  merch,
  labelReleases,
  liveVideos,
}: {
  categories: string[];
  newsPosts: NewsPostsQuery["NewsPosts"];
  merch: MerchQuery["Merches"];
  labelReleases: LabelReleasesQuery["LabelReleases"];
  liveVideos: LiveVideosQuery["LiveVideos"];
}) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(deviceIsMobile());
  }, []);

  return (
    <div>
      <HomePageHeader></HomePageHeader>
      <div className="w-11/12 lg:w-9/12 2xl:w-7/12 md:ml-8 mx-auto">
        <div className="flex justify-between">
          <h1 className="text-white">LATEST</h1>
          <Link
            href="https://www.youtube.com/channel/UCrJUlunwq20no8FY9oczb_A"
            target="_blank"
            className="text-white hover:bg-white hover:text-black font-space-mono"
          >
            VIDS ↗
          </Link>
        </div>
        <hr className="mt-4"></hr>
        <div className="mb-8 justify-center flex mt-5">
          <div className="gap-5 grid grid-cols-1 lg:grid-cols-2 w-full max-lg:[&>iframe:last-child]:hidden">
            <LiveVideos liveVideos={liveVideos}></LiveVideos>
          </div>
        </div>
        <div className="flex justify-between">
          <h1 className="text-white">NEWS</h1>
          <Link
            href="/news"
            className="text-white hover:bg-white hover:text-black font-space-mono"
          >
            MORE ↗
          </Link>
        </div>
        <hr className="mt-4"></hr>
        <div className="grid gap-5 w-full mt-5 mb-5 md:grid-cols-3 grid-cols-1">
          {newsPosts && <NewsCards posts={newsPosts}></NewsCards>}
        </div>
        <div className="flex justify-between">
          <h1 className="text-white">MERCH</h1>
          <Link
            href="https://quanticaonline.bandcamp.com/merch"
            target="_blank"
            className="text-white hover:bg-white hover:text-black font-space-mono"
          >
            MORE ↗
          </Link>
        </div>
        <hr className="mt-4"></hr>
        <div className="grid gap-5 w-full mt-5 mb-5 md:grid-cols-3 grid-cols-1">
          {merch && <MerchCards merch={merch} isMobile={isMobile}></MerchCards>}
        </div>
        <div className="flex justify-between">
          <h1 className="text-white">LABEL</h1>
          <Link
            href="https://quanticaonline.bandcamp.com/music"
            target="_blank"
            className="text-white hover:bg-white hover:text-black font-space-mono"
          >
            MORE ↗
          </Link>
        </div>
        <hr className="mt-4"></hr>
        <div className="grid gap-5 w-full mt-5 mb-8 md:grid-cols-3 grid-cols-1">
          {labelReleases && (
            <LabelReleasesCards
              labelReleases={labelReleases}
              isMobile={isMobile}
            ></LabelReleasesCards>
          )}
        </div>
      </div>
    </div>
  );
}
