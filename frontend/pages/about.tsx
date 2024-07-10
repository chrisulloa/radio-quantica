import Head from "next/head";
import Serialize from "../components/serialize";
import GoBackLink from "../components/goBack";
import { getAboutPageInfo } from "../lib/pageInfo";
import { LocaleInputType } from "../lib/gql/types/graphql";
import RichTextNode from "../lib/textNode";
import { useState } from "react";
import LanguageSelector from "../components/languageSelector";
import styles from "../components/content.module.css";

interface AboutPageProps {
  content: {
    portuguese: RichTextNode[];
    english: RichTextNode[];
  };
}

export async function getStaticProps(): Promise<{ props: AboutPageProps }> {
  const ptContent = await getAboutPageInfo(LocaleInputType.Pt);
  const enContent = await getAboutPageInfo(LocaleInputType.En);
  return {
    props: {
      content: {
        portuguese: ptContent,
        english: enContent,
      },
    },
  };
}

export default function About(props: AboutPageProps) {
  const [language, setLanguage] = useState<"PT" | "EN">("EN");
  return (
    <div className="mx-4 sm:ml-8">
      <Head>
        <title>Our project and mission - Rádio Quântica</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@quanticaonline" />
        <meta name="twitter:title" content="Rádio Quântica | About Us" />
        <meta
          name="twitter:description"
          content="Rádio Quântica's project and mission"
        />
        <meta
          name="twitter:image"
          content="https://cdn.particle.fm/socials/particle-fm-socials-banner.jpg"
        />

        <meta property="og:site_name" content="Rádio Quântica"></meta>
        <meta property="og:title" content="Rádio Quântica | About Us"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://particle.fm/about"></meta>
        <meta
          property="og:description"
          content="Rádio Quântica's project and mission"
        />
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
          content="Rádio Quântica Social Media Banner"
        ></meta>
        <meta property="og:image:type" content="image/jpg"></meta>
      </Head>
      <div className="md:w-5/6 lg:w-3/4 xl:w-2/4 w-full text-[18px] text-[#bfbfbf] px-5">
        <div className="flex justify-between py-1">
          <h2 className="text-white pt-4 sm:pt-0">ABOUT US</h2>
          <LanguageSelector
            selectedLocale={language}
            onClick={(e: any) => {
              setLanguage(e.target.value);
            }}
          />
        </div>
        <hr className="my-4"></hr>
        <div className="font-space-mono" id={styles.showContent}>
          {language === "EN"
            ? Serialize(props.content.english)
            : Serialize(props.content.portuguese)}
        </div>
      </div>
      <div className="my-8 mx-4">
        <GoBackLink fallback="/"></GoBackLink>
      </div>
    </div>
  );
}
