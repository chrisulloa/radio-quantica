import Head from "next/head";
import { NewsPostBySlugQuery } from "../lib/gql/types/graphql";
import { useRouter } from "next/router";
import { NewsHeaderBackground } from "./newsHeaderBackground";
import Link from "next/link";
import { formatCompactShowDate } from "../lib/dates";
import RichTextNode from "../lib/textNode";
import GoBackLink from "./goBack";
import NewsContent from "./newsContent";
import NewsTags from "./newsTags";
const NewsHeader = ({
  post,
  currentPath,
}: {
  post: NewsPostBySlugQuery["NewsPostBySlug"];
  currentPath: string;
}) => {
  if (!post) return <div></div>;

  const postImage = (post.content as RichTextNode[]).find(
    (val) => val.type === "upload"
  );
  const defaultOgImage =
    "https://cdn.particle.fm/socials/particle-fm-socials-banner.jpg";
  const ogImage = postImage?.value?.sizes.opengraph.url;
  return (
    <Head>
      <title>{post?.title}</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@quanticaonline" />
      <meta name="twitter:title" content={`Rádio Quântica | ${post?.title}`} />
      <meta
        name="twitter:description"
        content={post?.blurb || "DIY Community Radio"}
      />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />

      <meta property="og:site_name" content="Rádio Quântica"></meta>
      <meta
        property="og:title"
        content={`Rádio Quântica | ${post.title}`}
      ></meta>
      <meta property="og:type" content="website"></meta>
      <meta
        property="og:description"
        content={post.blurb || "Rádio Quântica News"}
      />
      <meta
        property="og:url"
        content={`https://particle.fm${currentPath}`}
      ></meta>
      <meta property="og:image" content={ogImage || defaultOgImage}></meta>
    </Head>
  );
};

export default function NewsPost({
  post,
}: {
  post: NewsPostBySlugQuery["NewsPostBySlug"];
}) {
  const router = useRouter();
  if (!post) {
    return <div></div>;
  }
  return (
    <div className="mx-2 sm:ml-8 md:mb-5 md:w-4/6 lg:w-4/5 xl:w-6/12">
      <NewsHeader currentPath={router.asPath} post={post}></NewsHeader>
      <div className="w-full text-[18px] text-[#bfbfbf]">
        <NewsHeaderBackground
          title={post.title || "Latest News"}
        ></NewsHeaderBackground>
        <div className="text-xl text-white px-5 py-4">
          <span>{post?.blurb}</span>
        </div>
        <hr className="border-dos-grey mb-4 mt-1 mx-5"></hr>
        <div className="flex px-5">
          <div className="grow text-white pt-1 my-auto mr-8">
            <span>By {post?.authorName}</span>
          </div>
          <div className="text-black text-xs w-min my-auto rounded bg-white px-2 py-1">
            {post?.publishDate && formatCompactShowDate(post?.publishDate)}
          </div>
        </div>
        {post?.content && (
          <NewsContent content={post.content as RichTextNode[]}></NewsContent>
        )}
        {post?.tags && (
          <div className="flex flex-wrap mb-4">
            <NewsTags tags={post.tags}></NewsTags>
          </div>
        )}
      </div>
      <div className="mt-5 flex justify-between mb-4">
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
  );
}
