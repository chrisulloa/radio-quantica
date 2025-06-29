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
import LanguageSelector from "./languageSelector";
import { useState } from "react";
import { defaultOgImage } from "../lib/utils";

const NewsHeader = ({
  post,
  currentPath,
}: {
  post: NewsPostBySlugQuery["NewsPostBySlug"];
  currentPath: string;
}) => {
  if (!post) return <div></div>;

  let ogImage: string | undefined;
  if (post?.previewBanner?.url) {
    ogImage = post.previewBanner.url;
  }
  if (!ogImage && post.content) {
    const postImage = (post.content as RichTextNode[]).find(
      (val) => val.type === "upload"
    );
    ogImage = postImage?.value?.sizes.opengraph.url;
  }

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
        content={`https://radioquantica.com${currentPath}`}
      ></meta>
      <meta property="og:image" content={ogImage || defaultOgImage}></meta>
    </Head>
  );
};

export default function NewsPost({
  post,
  enContent,
  ptContent,
}: {
  post: NewsPostBySlugQuery["NewsPostBySlug"];
  enContent: any;
  ptContent: any;
}) {
  const router = useRouter();
  const [language, setLanguage] = useState<"PT" | "EN">("EN");
  if (!post) {
    return <div></div>;
  }
  return (
    <div
      className={
        !!post?.heyZineUrl
          ? "mx-2 lg:mx-auto lg:w-7/8"
          : "mx-2 xl:mx-auto md:mb-5 md:w-5/6 lg:w-3/5 xl:w-5/12"
      }
    >
      <NewsHeader currentPath={router.asPath} post={post}></NewsHeader>
      <div
        className={
          !!post?.heyZineUrl
            ? "w-full text-[18px] text-[#bfbfbf]"
            : "w-full text-[18px] text-[#bfbfbf] border p-3 rounded-xl"
        }
      >
        <NewsHeaderBackground
          title={post.title || "Latest News"}
        ></NewsHeaderBackground>
        <div className="text-lg md:text-xl text-white px-5 py-4">
          <span>{post?.blurb}</span>
        </div>
        <hr className="border-dos-grey mb-4 mt-1 mx-5"></hr>
        <div className="flex px-5 justify-between">
          {enContent && ptContent && (
            <LanguageSelector
              selectedLocale={language}
              onClick={(e: any) => {
                setLanguage(e.target.value);
              }}
            ></LanguageSelector>
          )}
          <div className="text-black my-auto rounded-sm bg-white px-2 py-1 text-sm font-space-mono">
            {post?.publishDate && formatCompactShowDate(post?.publishDate)}
          </div>
        </div>
        {post.heyZineUrl && (
          <iframe
            allowFullScreen={true}
            scrolling="no"
            className="fp-iframe py-2 px-6"
            src={post.heyZineUrl}
            style={{ border: "0px", width: "100%", height: "800px" }}
          ></iframe>
        )}
        {post.content && (
          <NewsContent
            content={language === "EN" ? enContent : ptContent}
            image={{
              url: post.heyZineUrl ? undefined : post?.previewBanner?.url,
              alt: post?.title || "News Post Image",
            }}
          />
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
