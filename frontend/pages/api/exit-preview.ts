import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.clearPreviewData();

  const slug = typeof req.query.slug === "string" ? req.query.slug : undefined;
  res.redirect(307, slug ? `/news/${slug}` : "/news");
}
