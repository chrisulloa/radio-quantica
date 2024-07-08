import type { NextApiRequest, NextApiResponse } from "next";

function isString(data: any): data is string {
  return typeof data === "string";
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.REVALIDATION_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const { path } = req.query;

  if (
    isString(path) &&
    (path?.includes("/shows/") ||
      path?.includes("/categories/") ||
      path?.includes("/news/") ||
      path === "/news" ||
      path === "/")
  ) {
    try {
      await res.revalidate(path);
      return res.json({ revalidated: true });
    } catch (err) {
      // If there was an error, Next.js will continue
      // to show the last successfully generated page
      return res.status(500).send("Error revalidating");
    }
  }
  return res.status(400).send("Invalid path for revalidation.");
}
