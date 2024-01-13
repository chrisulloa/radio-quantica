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
        <title>Show Calendar - PARTICLE.FM</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@particlefm" />
        <meta name="twitter:title" content="PARTICLE.FM | Calendar" />
        <meta name="twitter:description" content="Particle FM Show Calendar" />
        <meta
          name="twitter:image"
          content="https://cdn.particle.fm/socials/particle-fm-socials-banner.jpg"
        />

        <meta property="og:site_name" content="PARTICLE.FM"></meta>
        <meta property="og:title" content="Particle FM Show Calendar"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://particle.fm/calendar"></meta>
        <meta
          property="og:description"
          content="Particle FM Upcoming Shows Calendar"
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
          content="Particle FM Social Media Banner"
        ></meta>
        <meta property="og:image:type" content="image/jpg"></meta>
      </Head>
      <DynamicCalendar eventClick={click(props.allShowIDs)}></DynamicCalendar>
    </div>
  );
}
