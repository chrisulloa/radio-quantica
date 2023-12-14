import Link from "next/link";
import { formatCompactShowDate } from "../lib/dates";

export const NewsCard = ({
  link,
  title,
  description,
  newWindow = false,
  date,
}: {
  link: string;
  title: string;
  description: string;
  newWindow?: boolean;
  date?: string;
}) => {
  return (
    <Link
      href={link}
      target={newWindow ? "_blank" : ""}
      className="py-3 h-full cursor-pointer text-white font-bold group"
    >
      <h1 className="text-lg sm:group-hover:border-b-white border-b-black border-b w-fit">
        {title}
      </h1>
      {date && (
        <div className="text-white text-xs w-min mt-3 rounded py-1">
          {formatCompactShowDate(date)}
        </div>
      )}
      <div className="text-white text-[0.985rem] col-span-3">{description}</div>
    </Link>
  );
};
