import Head from "next/head";
import {
  latestNewsQuery,
  tagLookupQuery,
} from "../../../lib/gql/documents/queries";
import { NewsCard } from "../../../components/newsCard";
import client from "../../../lib/services/graphql";
import { NewsPost } from "../../../lib/gql/types/graphql";
import capitalize from "lodash/capitalize";
import GoBackLink from "../../../components/goBack";
import Link from "next/link";

const PAGE_SIZE = 100;

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({
  params,
}: {
  params: { tagName: string };
}) {
  if (!params.tagName) return null;
  const { data: tagLookupData } = await client.query({
    query: tagLookupQuery,
    variables: {
      where: {
        name: {
          equals: params.tagName,
        },
      },
    },
    fetchPolicy: "no-cache",
  });

  if (
    !tagLookupData ||
    !tagLookupData.Tags?.docs ||
    tagLookupData.Tags.docs.length === 0 ||
    !tagLookupData.Tags.docs[0]
  )
    return { notFound: true };

  const tagId = tagLookupData.Tags.docs[0].id || "";

  const { data } = await client.query({
    query: latestNewsQuery,
    variables: {
      page: 1,
      limit: PAGE_SIZE,
      sort: "-publishDate",
      where: {
        tags: { in: [tagId] },
      },
    },
    fetchPolicy: "no-cache",
  });

  return {
    props: {
      newsPosts: data.NewsPosts?.docs,
      tagName: params.tagName,
    },
    revalidate: 43200, // Every 12 hrs
  };
}

const NewsTagHeader = (props: { tagName: string }) => {
  const capitalizedName = capitalize(props.tagName);
  return (
    <Head>
      <title>{`${capitalizedName} News - Rádio Quântica`}</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@quanticaonline" />
      <meta
        name="twitter:title"
        content={`Rádio Quântica | ${capitalizedName} News`}
      />
      <meta
        name="twitter:description"
        content={`Rádio Quântica ${capitalizedName} News`}
      />
      <meta
        name="twitter:image"
        content="https://radio-quantica.ams3.cdn.digitaloceanspaces.com/assets/radio_quantica_social_banner.jpg"
      />

      <meta property="og:site_name" content="Rádio Quântica"></meta>
      <meta
        property="og:title"
        content={`Rádio Quântica ${capitalizedName} News`}
      ></meta>
      <meta property="og:type" content="website"></meta>
      <meta
        property="og:url"
        content={`https://radioquantica.com/news/tag/${props.tagName}`}
      ></meta>
      <meta
        property="og:description"
        content={`Rádio Quântica ${capitalizedName} News`}
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

export default function NewsTagPage({
  newsPosts,
  tagName,
}: {
  newsPosts: NewsPost[];
  tagName: string;
}) {
  if (!tagName) return <div></div>;
  return (
    <div className="px-5 sm:px-10 w-full md:w-10/12 xl:w-6/12 mb-5">
      <NewsTagHeader tagName={tagName} />
      <div className="mb-4 flex w-full justify-between">
        <div className="text-white uppercase">{tagName}</div>
      </div>
      <div className="grid grid-cols-1 gap-6 text-white w-full sm:w-1/2 md:w-4/5">
        {newsPosts &&
          newsPosts?.map((doc, index) => {
            if (doc && doc.title && doc.blurb) {
              return (
                <NewsCard
                  key={doc.id}
                  link={`/news/${doc.slug}`}
                  title={doc.title}
                  newWindow={false}
                  date={doc.publishDate}
                  description={doc.blurb}
                  priority={index === 0}
                ></NewsCard>
              );
            }
          })}
        <div className="flex justify-between mb-2">
          <GoBackLink fallback={`/news`} isHidden={false}></GoBackLink>
          <Link
            href="/news"
            type="button"
            className="text-white hover:text-black hover:bg-white"
          >
            News →
          </Link>
        </div>
      </div>
    </div>
  );
}
