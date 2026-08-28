import type { NextApiRequest, NextApiResponse } from "next";
import isAdminOrEditor from "../../lib/auth";

// Matches Payload's default JWT tokenExpiration (2h). The cookie carrying
// the token is just a hint for the browser to drop it — the real boundary
// is Payload rejecting an expired JWT on each draft fetch server-side.
const PREVIEW_SESSION_MAX_AGE = 60 * 60 * 2;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { token, slug } = req.query;

  if (typeof token !== "string" || typeof slug !== "string") {
    return res.status(400).send("Missing token or slug");
  }

  if (!(await isAdminOrEditor(token))) {
    return res.status(401).send("Invalid or expired preview link");
  }

  // Stashes the editor's own JWT in Next's encrypted/signed preview-data
  // cookie (readable back via getStaticProps's `previewData`) and enables
  // draft mode (`context.draftMode`) as a side effect of the same cookie.
  res.setPreviewData(token, {
    maxAge: PREVIEW_SESSION_MAX_AGE,
    path: "/",
  });
  res.redirect(307, `/news/${slug}`);
}
