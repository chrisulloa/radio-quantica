import Head from "next/head";
import { DateTime } from "luxon";
import { useCallback, useState } from "react";
import axios from "axios";
import { WeeklySchedule } from "../lib/services/airtime";
import useSWR from "swr";

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

const emptySchedule: WeeklySchedule = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: [],
};

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
    <div className="flex gap-x-2 sm:gap-x-4 font-space-mono">
      {days.map((day) => {
        return (
          <button
            key={day}
            className={`capitalize px-3 py-1  border ${
              day === currentDay ? "bg-white text-black" : "hover:opacity-60"
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
    <table className="flex text-white w-full font-space-mono">
      <thead></thead>
      <tbody>
        {schedule &&
          schedule.map((item, i) => {
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

const fetcher = (url: string) =>
  axios.get<WeeklySchedule>(url).then((res) => res.data);

const ScheduleHead = () => {
  return (
    <Head>
      <title>Schedule - Rádio Quântica</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@quanticaonline" />
      <meta name="twitter:title" content="Rádio Quântica | Schedule" />
      <meta name="twitter:description" content="Rádio Quântica Schedule" />
      <meta
        name="twitter:image"
        content="https://radio-quantica.ams3.cdn.digitaloceanspaces.com/assets/radio_quantica_social_banner.jpg"
      />

      <meta property="og:site_name" content="Rádio Quântica"></meta>
      <meta property="og:title" content="Rádio Quântica Show Calendar"></meta>
      <meta property="og:type" content="website"></meta>
      <meta
        property="og:url"
        content="https://radioquantica.com/schedule"
      ></meta>
      <meta property="og:description" content="Rádio Quântica Upcoming Shows" />
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
  );
};
export default function SchedulePage() {
  const today = new Date().getDay();

  const [day, setDay] = useState<Day>(days[today]);

  const onClick = useCallback((e: any) => {
    setDay(e.target.value as Day);
  }, []);

  const { data, error, isLoading } = useSWR(
    "https://azuracast.particle.fm/api/nowplaying/1",
    fetcher,
    { refreshInterval: 20000 }
  );

  const schedule = data ? data[day] : [];

  return (
    <div className="mx-4 sm:ml-8 text-white">
      <ScheduleHead></ScheduleHead>
      <div className="sm:flex sm:flex-col sm:items-start sm:w-min hidden">
        <h1 className="text-xl mb-4">SCHEDULE</h1>
        <hr className="w-full"></hr>
        <div className="mt-4 w-fit">
          <div className="py-4 text-lg w-full mb-4">
            <DaysSelector currentDay={day} onClick={onClick}></DaysSelector>
          </div>
          <div className="w-full flex">
            <DaySchedule schedule={schedule}></DaySchedule>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:hidden text-xs mx-4">
        <h1 className="pb-2 text-xl">SCHEDULE</h1>
        <hr className="w-full"></hr>
        <div className="pt-4">
          {days.map((d) => {
            return (
              <div className="pb-2" key={d}>
                <p className="underline pb-1 pt-4">{d.toUpperCase()}</p>
                <DaySchedule
                  schedule={data ? data[d] : emptySchedule[d]}
                ></DaySchedule>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
