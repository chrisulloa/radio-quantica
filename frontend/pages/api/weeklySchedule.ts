import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { WeeklySchedule } from "../../lib/services/airtime";

const fetcher = (url: string) =>
  axios.get<WeeklySchedule>(url).then((res) => res.data);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await fetcher(
    "https://airtime.radioquantica.com/api/week-info"
  );
  return res.status(200).send(result);
}
