import Card from "./card";
import Link from "next/link";

export default function ExhibitorCard({
  id,
  name,
}: {
  id: string;
  name: string;
}) {
  return (
    <Card>
      <div className="leading-tight tracking-tight text-[18px] break-words">
        <Link
          href={`/compressed/2023/${id}`}
          className="hover:bg-black hover:text-dos-grey"
        >
          {name}
        </Link>
      </div>
    </Card>
  );
}
