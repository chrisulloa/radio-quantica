import Link from "next/link";
import Image from "next/image";
import { formatCompactShowDate } from "../lib/dates";

export const NewsCard = ({
  link,
  title,
  description,
  newWindow = false,
  date,
  previewBannerUrl,
}: {
  link: string;
  title: string;
  description: string;
  newWindow?: boolean;
  date?: string;
  previewBannerUrl?: string | null;
}) => {
  return (
    <Link
      href={link}
      target={newWindow ? "_blank" : ""}
      className="py-3 h-full cursor-pointer text-white font-bold group hover:opacity-50"
    >
      <h1 className="text-lg border-b-black border-b w-fit mb-4">{title}</h1>
      {previewBannerUrl && (
        <div className="mt-1 mb-3 overflow-hidden relative h-60 w-full">
          <Image
            className="object-cover"
            src={previewBannerUrl}
            alt={title}
            fill={true}
          ></Image>
        </div>
      )}
      {date && (
        <div className="text-white text-xs w-min mt-3 py-1 mb-2">
          {formatCompactShowDate(date)}
        </div>
      )}
      <div className="text-[0.985rem] col-span-3 text-sm text-dos-grey">
        {description}
      </div>
    </Link>
  );
};
