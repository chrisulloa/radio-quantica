import Head from "next/head";
import { NewsPost } from "../lib/gql/types/graphql";
import { NewsCard } from "./newsCard";
import TagsCard from "./tagsCard";
import Pagination from "./pagination";
import Link from "next/link";

const NewsPageHeader = ({ page }: { page: number }) => {
  const title = `News - Page ${page} - Rádio Quântica`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@quanticaonline" />
      <meta name="twitter:title" content="Rádio Quântica | Latest News" />
      <meta
        name="twitter:description"
        content="Rádio Quântica's upcoming events, latest news, articles & more."
      />
      <meta
        name="twitter:image"
        content="https://radio-quantica.ams3.cdn.digitaloceanspaces.com/assets/radio_quantica_social_banner.jpg"
      />

      <meta property="og:site_name" content="Rádio Quântica"></meta>
      <meta property="og:title" content="Rádio Quântica Latest News"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content="https://radioquantica.com/news"></meta>
      <meta
        property="og:description"
        content="Rádio Quântica's upcoming events, latest news, articles & more."
      />
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

export default function NewsPage({
  newsPosts,
  tags,
  currentPage,
  totalPages,
}: {
  newsPosts: NewsPost[];
  tags: string[];
  currentPage: number;
  totalPages: number;
  pageSize: number;
}) {
  if (!newsPosts) {
    return <div className="text-white">Unable to load news...</div>;
  }
  return (
    <div className="md:ml-8 px-4 md:px-0 w-full md:w-10/12 lg:w-10/12 2xl:w-9/12 mb-5">
      <NewsPageHeader page={currentPage}></NewsPageHeader>
      <div className="grid sm:grid-cols-6 w-full gap-5 sm:gap-12 sm:pr-4">
        <div className="w-full sm:col-span-4">
          <div className="flex justify-between mb-4">
            <h1 className="text-white">NEWS</h1>
            <div className="text-white">
              {currentPage !== 1 && (
                <Link
                  href={`/news/page/${currentPage - 1}`}
                  className="text-white hover:text-dos-grey"
                >
                  ←
                </Link>
              )}
              &nbsp;&nbsp;
              {currentPage < totalPages && (
                <Link
                  href={`/news/page/${currentPage + 1}`}
                  className="text-white hover:text-dos-grey"
                >
                  →
                </Link>
              )}
            </div>
          </div>
          <hr></hr>
          <div className="grid lg:grid-cols-2 gap-6 text-white w-full mt-4">
            {newsPosts.map((doc, index) => {
              if (doc && doc.title && doc.blurb) {
                return (
                  <NewsCard
                    key={doc.id}
                    link={`/news/${doc.slug}`}
                    title={doc.title}
                    newWindow={false}
                    date={doc.publishDate}
                    description={doc.blurb}
                    previewBannerUrl={doc.previewBanner?.url}
                    priority={index === 0}
                  ></NewsCard>
                );
              }
            })}
          </div>
        </div>
        <div className="mb-4 sm:mb-0 sm:col-span-2 pr-2 sm:pr-0">
          <div className="text-white mb-4">TAGS</div>
          <TagsCard tags={tags}></TagsCard>
        </div>
      </div>
      <div className="flex justify-center sm:ml-0 sm:justify-start w-full">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          renderPageLink={(page: number) => `/news/page/${page}`}
        ></Pagination>
      </div>
    </div>
  );
}
