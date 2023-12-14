import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import serverBaseURL from "../../lib/utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body as { email: string };

  try {
    const result = await axios.post(
      `${serverBaseURL}/api/mailingListSubscribers`,
      {
        email,
      },
      {
        validateStatus: function (status) {
          return status >= 200 && status < 500; // default
        },
      }
    );
    if (
      result.status === 400 &&
      result.data.errors &&
      result.data.errors.length > 0
    ) {
      const error = result.data.errors[0];
      const data = error.data;
      if (data && data.length > 0 && data[0].message.includes("unique")) {
        res.status(400).send({ success: false, message: "Already exists." });
        return;
      }
    }
    res.status(200).send({ success: true });
  } catch (e) {
    console.log(e);
    res.status(400).send({ success: false });
  }
}
