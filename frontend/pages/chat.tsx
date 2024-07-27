import Head from "next/head";
import GoBackLink from "../components/goBack";

export default function Chat() {
  return (
    <div className="mx-4 sm:ml-8">
      <Head>
        <title>Chat - Rádio Quântica</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@quanticaonline" />
        <meta name="twitter:title" content="Rádio Quântica | About Us" />
        <meta name="twitter:description" content="Rádio Quântica Chat" />
        <meta
          name="twitter:image"
          content="https://radio-quantica.ams3.cdn.digitaloceanspaces.com/assets/radio_quantica_social_banner.jpg"
        />

        <meta property="og:site_name" content="Rádio Quântica"></meta>
        <meta property="og:title" content="Rádio Quântica | Chat"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://radioquantica.com/chat"></meta>
        <meta property="og:description" content="Rádio Quântica Chat" />
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
        <h2 className="text-white sm:pt-0 h-min my-auto">CHAT</h2>
        <hr className="my-4"></hr>
        <iframe
          src="https://minnit.chat/c/RadioQuantica?embed&&nickname="
          style={{
            border: "none",
            width: "100%",
            height: "65vh",
          }}
          allowTransparency={true}
        ></iframe>
        <br />
      </div>
      <div className="my-2">
        <GoBackLink fallback="/"></GoBackLink>
      </div>
    </div>
  );
}
