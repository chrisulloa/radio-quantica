import Head from "next/head";
import {
  latestNewsQuery,
  tagLookupQuery,
} from "../../lib/gql/documents/queries";
import { NewsCard } from "../../components/newsCard";
import TagsCard from "../../components/tagsCard";
import client from "../../lib/services/graphql";
import { NewsPost } from "../../lib/gql/types/graphql";

const PAGE_SIZE = 20;

export async function getStaticProps() {
  const { data } = await client.query({
    query: latestNewsQuery,
    variables: { page: 1, limit: PAGE_SIZE, sort: "-publishDate" },
    fetchPolicy: "no-cache",
  });

  const newsPosts = data.NewsPosts?.docs;

  const { data: tagsData } = await client.query({
    query: tagLookupQuery,
    fetchPolicy: "no-cache",
  });
  const tags =
    tagsData?.Tags?.docs
      ?.map((tag) => tag?.name)
      .filter((name): name is string => Boolean(name)) || [];

  return {
    props: {
      tags,
      newsPosts,
    },
  };
}

const NewsPageHeader = () => (
  <Head>
    <title>Latest News - Rádio Quântica</title>
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

export default function NewsPage({
  newsPosts,
  tags,
}: {
  newsPosts: NewsPost[];
  tags: string[];
}) {
  if (!newsPosts) {
    return <div className="text-white">Unable to load news...</div>;
  }
  return (
    <div className="md:ml-8 px-4 md:px-0 w-full md:w-10/12 xl:w-8/12 2xl:w-7/12 mb-5">
      <NewsPageHeader></NewsPageHeader>
      <div className="grid sm:grid-cols-6 w-full gap-5 sm:gap-12 sm:pr-4">
        <div className="w-full sm:col-span-4">
          <div className="text-white mb-4">LATEST NEWS</div>
          <hr></hr>
          <div className="grid grid-cols-1 gap-6 text-white w-full mt-4">
            {newsPosts.map((doc) => {
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
    </div>
  );
}
