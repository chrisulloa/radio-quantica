import React from "react";
import capitalize from "lodash/capitalize";
import Link from "next/link";

export default function NewsTags({
  tags,
}: {
  tags: { name?: string | null; id?: string | null }[];
}) {
  return (
    <React.Fragment>
      {tags.map((tag) => {
        return (
          <Link
            href={`/news/tag/${tag.name}`}
            key={tag.id}
            className="mb-2 text-neon-green tracking-wide text-sm col-span-1 ml-5 my-auto rounded bg-black border border-neon-green px-2 py-1 w-min hover:bg-neon-green hover:text-black"
          >
            {`${capitalize(tag.name || "")}`}
          </Link>
        );
      })}
    </React.Fragment>
  );
}
