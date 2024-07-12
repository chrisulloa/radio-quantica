import Head from "next/head";
import Serialize from "../components/serialize";
import GoBackLink from "../components/goBack";
import { getDonatePageInfo } from "../lib/pageInfo";
import { LocaleInputType } from "../lib/gql/types/graphql";
import RichTextNode from "../lib/textNode";
import { useState } from "react";
import LanguageSelector from "../components/languageSelector";
import styles from "../components/content.module.css";

interface DonatePageProps {
  content: {
    portuguese: RichTextNode[];
    english: RichTextNode[];
  };
}

export async function getStaticProps(): Promise<{ props: DonatePageProps }> {
  const pt = await getDonatePageInfo(LocaleInputType.Pt);
  const en = await getDonatePageInfo(LocaleInputType.En);
  return {
    props: {
      content: {
        portuguese: pt?.content,
        english: en?.content,
      },
    },
  };
}

export default function About(props: DonatePageProps) {
  const [language, setLanguage] = useState<"PT" | "EN">("EN");
  return (
    <div className="mx-4 sm:ml-8">
      <Head>
        <title>Donate - Rádio Quântica</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@quanticaonline" />
        <meta name="twitter:title" content="Rádio Quântica | About Us" />
        <meta name="twitter:description" content="Donate to Rádio Quântica" />
        <meta
          name="twitter:image"
          content="https://radio-quantica.ams3.cdn.digitaloceanspaces.com/assets/radio_quantica_social_banner.jpg"
        />

        <meta property="og:site_name" content="Rádio Quântica"></meta>
        <meta property="og:title" content="Rádio Quântica | Donate"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:url"
          content="https://radio-quantica.vercel.app/donate"
        ></meta>
        <meta
          property="og:description"
          content="How to support and donate to Rádio Quântica"
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
      <div className="md:w-5/6 lg:w-3/4 xl:w-2/4 w-full text-[18px] text-[#bfbfbf]">
        <div className="flex justify-between h-min align-middle">
          <h2 className="text-white sm:pt-0 h-min my-auto">DONATE</h2>
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
        <div className="flex justify-center mt-8">
          <form
            action="https://www.paypal.com/donate"
            method="post"
            target="_blank"
          >
            <input type="hidden" name="cmd" value="_donations"></input>
            <input
              type="hidden"
              name="business"
              value="hello@radioquantica.com"
            ></input>
            <input
              type="hidden"
              name="item_name"
              value="Non-Profit Community Radio"
            ></input>
            <input type="hidden" name="currency_code" value="EUR"></input>
            <button className="text-white border px-5 py-3 rounded-xl hover:bg-white hover:text-black">
              DONATE
            </button>
          </form>
        </div>
      </div>

      <div className="my-8 mx-4">
        <GoBackLink fallback="/"></GoBackLink>
      </div>
    </div>
  );
}
