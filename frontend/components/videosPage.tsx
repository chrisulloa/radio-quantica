import Head from "next/head";
import { LiveVideo } from "../lib/gql/types/graphql";
import Pagination from "./pagination";
import Link from "next/link";
import VideoCard from "./videoCard";

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
      <meta
        name="twitter:image"
        content="https://radio-quantica.ams3.cdn.digitaloceanspaces.com/assets/radio_quantica_social_banner.jpg"
      />

      <meta property="og:site_name" content="Rádio Quântica"></meta>
      <meta property="og:title" content="Rádio Quântica Latest Streams"></meta>
      <meta property="og:type" content="website"></meta>
      <meta
        property="og:url"
        content="https://radioquantica.com/streams"
      ></meta>
      <meta property="og:description" content="Rádio Quântica Latest Streams" />
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
      <meta
        property="og:image:alt"
        content="Rádio Quântica Social Media Banner"
      ></meta>
      <meta property="og:image:type" content="image/jpg"></meta>
    </Head>
  );
};

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
  if (!vids) {
    return <div className="text-white">Unable to load videos...</div>;
  }
  return (
    <div className="md:ml-8 px-4 md:px-0 w-full md:w-10/12 lg:w-10/12 2xl:w-10/12 mb-5">
      <StreamsHeader page={currentPage}></StreamsHeader>
      <div className="flex justify-between mb-4">
        <h1 className="text-white">STREAMS</h1>
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
      </div>
      <hr></hr>
      <div className="grid lg:grid-cols-3 gap-6 text-white w-full mt-4">
        {vids.map((doc) => {
          if (doc) {
            return <VideoCard key={doc.id} video={doc}></VideoCard>;
          }
        })}
      </div>
      <div className="flex justify-center sm:ml-0 sm:justify-start w-full">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          renderPageLink={(page: number) => `/streams/page/${page}`}
        ></Pagination>
      </div>
    </div>
  );
}
