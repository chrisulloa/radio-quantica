import type { EventClickArg, EventHoveringArg } from "@fullcalendar/core";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { getAllShowIDs, ShowIDMapping } from "../lib/shows";

export async function getStaticProps() {
  const allShowIDs = await getAllShowIDs();
  return {
    props: {
      allShowIDs,
    },
  };
}

const DynamicCalendar = dynamic(() => import("../components/calendar"), {
  loading: () => <div></div>,
});

export default function CalendarPage(props: { allShowIDs: ShowIDMapping[] }) {
  const router = useRouter();
  const click = useCallback(
    (showIDs: ShowIDMapping[]) => (info: EventClickArg) => {
      const titleRegex = /(.+?(?= w\/))/g;
      const eventTitle = info.event.title;
      const show = showIDs.find((show) => {
        const showTitleMatch = eventTitle.match(titleRegex);
        return showTitleMatch && show.title === showTitleMatch[0];
      });
      show && router.push(`/show/${show?.id}`);
    },
    [router]
  );

  return (
    <div className="mb-8">
      <Head>
        <title>Show Calendar - Rádio Quântica</title>
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
      <DynamicCalendar eventClick={click(props.allShowIDs)}></DynamicCalendar>
    </div>
  );
}
