import Card from "./card";
import Link from "next/link";

export default function ShowCard({
  id,
  title,
  host,
}: {
  id: string;
  title: string;
  host: string;
}) {
  return (
    <Card>
      <div className="leading-tight tracking-tight text-[18px] break-words">
        <Link
          href={`/shows/${id}`}
          className="hover:bg-black hover:text-dos-grey"
        >
          {title} w/ {host}
        </Link>
      </div>
    </Card>
  );
}
