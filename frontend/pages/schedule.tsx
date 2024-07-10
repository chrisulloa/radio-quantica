import Head from "next/head";
import { weekInfo } from "../lib/mockData";
import { DateTime } from "luxon";
import { useCallback, useState } from "react";
import GoBackLink from "../components/goBack";

type Day =
  | "sunday"
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday";

const days: Day[] = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

interface DaySchedule {
  start_timestamp: string;
  end_timestamp: string;
  name: string;
  id: number;
  instance_id: number;
  record: number;
  url: string;
  starts: string;
  ends: string;
}
const formatTime = (time: string) =>
  DateTime.fromFormat(time, "yyyy-MM-dd HH:mm:ss").toFormat("HH:mm");

const DaysSelector = ({
  currentDay,
  onClick,
}: {
  currentDay: Day;
  onClick: (e: any) => void;
}) => {
  return (
    <div className="flex gap-x-2 sm:gap-x-4">
      {days.map((day) => {
        return (
          <button
            key={day}
            className={`capitalize px-3 py-1 text-white border ${
              day === currentDay ? "bg-white text-black" : ""
            }`}
            onClick={onClick}
            value={day}
          >
            {day}
          </button>
        );
      })}
    </div>
  );
};

const DaySchedule = ({ schedule }: { schedule: DaySchedule[] }) => {
  return (
    <table className="flex text-white w-full">
      <thead></thead>
      <tbody>
        {schedule.map((item, i) => {
          const start = formatTime(item.start_timestamp);
          const end = formatTime(item.end_timestamp);
          return (
            <tr key={i}>
              <td className="sm:pr-5 w-[160px] sm:w-[200px] py-4 sm:py-0">
                {start} - {end}
              </td>
              <td>{item.name.replace("&amp;", "&")}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default function SchedulePage() {
  const data = weekInfo;

  const today = new Date().getDay();

  const [day, setDay] = useState<Day>(days[today]);
  const [schedule, setSchedule] = useState<DaySchedule[]>(data[day]);
  const onClick = useCallback(
    (e: any) => {
      setDay(e.target.value as Day);
      setSchedule(data[e.target.value as Day]);
    },
    [data]
  );

  return (
    <div className="mb-8 text-white">
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
      <div className="sm:flex sm:flex-col sm:items-start sm:mx-8 sm:w-min hidden">
        <h1 className="pb-2 text-xl">Schedule</h1>
        <hr className="w-full"></hr>
        <div className=" w-fit">
          <div className="py-4 text-lg w-full">
            <DaysSelector currentDay={day} onClick={onClick}></DaysSelector>
          </div>
          <div className="w-full flex">
            <DaySchedule schedule={schedule}></DaySchedule>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:hidden text-xs mx-4">
        <h1 className="pb-2 text-xl">Schedule</h1>
        <hr className="w-full"></hr>
        <div className="pt-4">
          {days.map((d) => {
            return (
              <div className="pb-2" key={d}>
                <p className="underline pb-1 pt-4">{d.toUpperCase()}</p>
                <DaySchedule schedule={data[d]}></DaySchedule>
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-span-4">
        <GoBackLink fallback="/"></GoBackLink>
      </div>
    </div>
  );
}
