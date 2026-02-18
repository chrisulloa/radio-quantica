import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NewsCard } from "../components/newsCard";
import {
  labelReleasesQuery,
  latestNewsQuery,
  liveVideosQuery,
  merchQuery,
  owncastQuery,
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
import { useQuery } from "@apollo/client";
import LiveVideoCard from "../components/liveVideoCard";
import VideoCard from "../components/videoCard";
import { defaultOgImage } from "../lib/utils";

export async function getStaticProps() {
  const { data } = await client.query({
    query: latestNewsQuery,
    variables: { page: 1, limit: 6, sort: "-publishDate" },
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
      <meta name="description" content="Rádio Quântica is a Lisbon-based community radio station and underground arts platform, broadcasting 24/7 since 2015. Stream live shows, news, and independent music." />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@quanticaonline" />
      <meta name="twitter:title" content="Rádio Quântica" />
      <meta
        name="twitter:description"
        content="Online community radio station based in Lisbon, Portugal."
      />
      <meta name="twitter:image" content={defaultOgImage} />

      <meta property="og:site_name" content="Rádio Quântica"></meta>
      <meta property="og:title" content="Rádio Quântica"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content="https://radioquantica.com/"></meta>
      <meta
        property="og:description"
        content="Online community radio station based in Lisbon, Portugal."
      ></meta>
      <meta property="og:image" content={defaultOgImage}></meta>
      <meta property="og:image:secure_url" content={defaultOgImage}></meta>
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
      {posts.docs.map((doc, index) => {
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
              priority={index === 0}
            ></NewsCard>
          );
        }
      })}
    </React.Fragment>
  );
};

const LiveVideos = (props: { liveVideos: LiveVideosQuery["LiveVideos"] }) => {
  const liveVideos = props.liveVideos;
  if (!liveVideos || !liveVideos.docs) {
    return <div></div>;
  }
  return (
    <div className={`gap-5 grid grid-cols-1 lg:grid-cols-2 w-full`}>
      {liveVideos.docs.map((doc, index) => {
        if (doc && doc.id && doc.url) {
          return <VideoCard video={doc} key={index}></VideoCard>;
        }
      })}
    </div>
  );
};

const LeftContent = ({
  isLiveVideoStream,
  newsPosts,
  merch,
  labelReleases,
  liveVideos,
  isMobile,
}: {
  isLiveVideoStream: boolean;
  newsPosts: NewsPostsQuery["NewsPosts"];
  merch: MerchQuery["Merches"];
  labelReleases: LabelReleasesQuery["LabelReleases"];
  liveVideos: LiveVideosQuery["LiveVideos"];
  isMobile: boolean;
}) => {
  return (
    <>
      <div className="flex justify-between">
        {isLiveVideoStream && (
          <div className="flex">
            <svg className="animate-pulse mr-3" height="20" width="20">
              <circle cx="50%" cy="50%" r="6" fill="red" />
            </svg>
            <h1 className="text-white">LIVE NOW</h1>
          </div>
        )}
        {!isLiveVideoStream && <h1 className="text-white">LATEST</h1>}
        <Link
          href="/streams"
          className="text-white hover:bg-white hover:text-black font-space-mono"
        >
          VIDS ↗
        </Link>
      </div>
      <hr className="mt-4"></hr>
      {isLiveVideoStream && <LiveVideoCard />}
      {!isLiveVideoStream && <LiveVideos liveVideos={liveVideos}></LiveVideos>}
      <div className="flex justify-between mt-8">
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
    </>
  );
};

const RightContent = () => {
  return (
    <div className="lg:fixed lg:w-[175px] xl:w-[220px] text-white p-3 border flex-col">
      <div className="flex justify-center h-[90px]">
        <Image
          src="https://radio-quantica.ams3.cdn.digitaloceanspaces.com/assets/radio_quantica_social_banner.jpg"
          alt="Radio Quantica Logo"
          height={405}
          width={300}
          className="object-scale-down"
        ></Image>
      </div>

      <p className="mx-auto font-space-mono text-sm px-1 text-center">
        Rádio Quântica muda de espaço e lança crowdfunding para continuar a sua
        programação cultural independente
      </p>

      <Link
        href="https://www.gofundme.com/f/help-radio-quantica-move-studio-start-a-community-artspace?lang=en_GB&amp;ts=1749136892&amp;utm_campaign=fp_sharesheet&amp;utm_medium=customer&amp;utm_source=copy_link&amp;attribution_id=sl%3Afac6f332-a5a1-43db-8beb-0bccbda1f72a"
        className="border px-3 py-2 text-sm w-full block text-center mt-4 hover:text-black hover:bg-white"
        target="_blank"
      >
        Donate Now!
      </Link>
    </div>
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
  const [isLiveVideoStream, setIsLiveVideoStream] = useState(false);

  const [pollInterval, setPollInterval] = useState(10000);
  const { data, loading } = useQuery(owncastQuery, {
    pollInterval,
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    if (!loading && data) {
      if (data.Owncast?.isLive === true) {
        setTimeout(() => {
          setIsLiveVideoStream(true);
          setPollInterval(30000);
        }, 2000);
      } else {
        setIsLiveVideoStream(false);
        setPollInterval(10000);
      }
    }
    setIsMobile(deviceIsMobile());
  }, [data, loading]);

  return (
    <div className="w-full">
      <HomePageHeader></HomePageHeader>
      <div className="w-full mx-auto">
        <div className="grid grid-cols-14">
          <div className="lg:col-span-11 xl:col-span-9 col-span-14 px-4">
            <LeftContent
              isMobile={isMobile}
              isLiveVideoStream={isLiveVideoStream}
              newsPosts={newsPosts}
              merch={merch}
              liveVideos={liveVideos}
              labelReleases={labelReleases}
            ></LeftContent>
          </div>
          <div className="col-span-14 lg:col-span-3 xl:col-span-3 p-4">
            <RightContent></RightContent>
          </div>
        </div>
      </div>
      <div className="pb-8">
        <Image
          src="/logos.png"
          height={200}
          width={650}
          alt="Apoio Republica Portuguesa"
        ></Image>
      </div>
    </div>
  );
}
