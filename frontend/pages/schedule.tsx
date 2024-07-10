import Head from "next/head";
import { useRouter } from "next/router";

export default function SchedulePage() {
  const router = useRouter();

  return (
    <div className="mb-8">
      <Head>
        <title>Schedule - Rádio Quântica</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@quanticaonline" />
        <meta name="twitter:title" content="Rádio Quântica | Calendar" />
        <meta
          name="twitter:description"
          content="Rádio Quântica Show Calendar"
        />
        <meta
          name="twitter:image"
          content="https://cdn.particle.fm/socials/particle-fm-socials-banner.jpg"
        />

        <meta property="og:site_name" content="Rádio Quântica"></meta>
        <meta property="og:title" content="Rádio Quântica Show Calendar"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://particle.fm/calendar"></meta>
        <meta
          property="og:description"
          content="Rádio Quântica Upcoming Shows Calendar"
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
    </div>
  );
}
