import Link from "next/link";
import Card from "./card";
import capitalize from "lodash/capitalize";

export default function TagsCard({ tags }: { tags: string[] }) {
  return (
    <Card>
      <ul className="text-[18px]">
        {tags.map((tag, index) => {
          return (
            <li className="leading-tight" key={index}>
              <Link
                href={`/news/tag/${tag}`}
                className="block hover:bg-black hover:text-dos-grey"
              >
                {capitalize(tag)}
              </Link>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
