import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { NowPlayingResponse } from "../../lib/services/azuracast";

const fetcher = (url: string) =>
  axios.get<NowPlayingResponse>(url).then((res) => res.data);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await fetcher(
    "https://airtime.radioquantica.com/api/live-info"
  );
  return res.status(200).send(result);
}
