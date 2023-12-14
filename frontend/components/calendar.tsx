import React, { useEffect, useState, useCallback } from "react";
import luxonPlugin from "@fullcalendar/luxon";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import styles from "./calendar.module.css";
import { EventClickArg } from "@fullcalendar/core";

const baseUrl = "https://azuracast.particle.fm/api/station/1";

const getScheduleUrl = () => {
  return `${baseUrl}/schedule`;
};
const myRef = React.createRef<FullCalendar>();

const getHeaderProps = () => {
  let headers = {
    left: "prev,next",
    center: "title",
    right: "dayGridMonth,timeGridWeek",
  };
  switch (true) {
    case window.innerWidth < 1000:
      headers.right = "next";
      headers.center = "title";
      headers.left = "prev";
      break;
    default:
      headers.right = "dayGridMonth,timeGridWeek";
  }
  return headers;
};

const getDurationProps = (): { days: number } => {
  let durationProps = { days: 3 };
  switch (true) {
    case window.innerWidth < 765:
      durationProps.days = 3;
      break;
    case window.innerWidth > 765 && window.innerWidth < 1000:
      durationProps.days = 5;
      break;
    default:
      durationProps.days = 7;
      break;
  }
  return durationProps;
};

const getView = () => {
  const calendar = myRef?.current?.getApi();
  const currentView = calendar?.view.type;
  if (
    window.innerWidth < 1000 &&
    (currentView === "dayGridMonth" ||
      currentView === "timeGridWeek" ||
      currentView === "timeGridDay")
  ) {
    return "timeGrid";
  }
  return currentView;
};

const getNavLinks = () => {
  return window.innerWidth >= 1000 ? true : undefined;
};

const handleWindowResize = () => {
  const calendar = myRef?.current?.getApi();
  const newView = getView();
  if (newView) {
    calendar?.changeView(newView);
  }
  calendar?.setOption("navLinks", getNavLinks());
  calendar?.setOption("headerToolbar", getHeaderProps());
  calendar?.setOption("duration", getDurationProps());
};

const getInitialView = () => {
  return "timeGrid";
};

export default function Calendar(props: {
  eventClick: (arg: EventClickArg) => any;
}) {
  const [durationProps, setDurationProps] = useState<{ days: number }>({
    days: 7,
  });
  const [headerProps, setHeaderProps] = useState<{
    left?: string;
    center?: string;
    right?: string;
  }>({});

  const [navLinks, setNavLinks] = useState<true | undefined>();

  const mouseEnter = useCallback((e: any) => {
    document.body.style.cursor = "pointer";
  }, []);

  const mouseLeave = useCallback(() => {
    document.body.style.cursor = "auto";
  }, []);

  useEffect(() => {
    setDurationProps(getDurationProps());
    setHeaderProps(getHeaderProps());
    setNavLinks(getNavLinks());
  }, []);

  return (
    <div
      className={`${styles.calendar} text-white mx-5 md:w-5/6 tracking-tightest lg:w-3/4 text-sm font-mono`}
    >
      <FullCalendar
        timeZone="America/Los_Angeles"
        eventClick={props.eventClick}
        eventMouseEnter={mouseEnter}
        eventMouseLeave={mouseLeave}
        ref={myRef}
        initialView={getInitialView()}
        duration={durationProps}
        headerToolbar={headerProps}
        windowResize={handleWindowResize}
        nowIndicator={true}
        defaultTimedEventDuration={"01:00"}
        navLinks={navLinks}
        footerToolbar={false}
        height={"85vh"}
        plugins={[luxonPlugin, timeGridPlugin, dayGridPlugin]}
        events={getScheduleUrl()}
        expandRows={true}
        stickyHeaderDates={true}
        slotMinTime={"10:00:00"}
      />
    </div>
  );
}
