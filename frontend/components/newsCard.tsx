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
      className="py-3 h-full cursor-pointer text-white group hover:opacity-50 flex flex-col"
    >
      <h1 className="text-md border-b-black border-b w-fit mb-4">{title}</h1>
      {previewBannerUrl && (
        <div className="mt-1 mb-3 overflow-hidden relative h-60 w-full">
          <Image
            className="object-cover"
            src={previewBannerUrl}
            alt={title}
            fill={true}
            sizes="(max-width: 768px) 95vw, 34vw"
          ></Image>
        </div>
      )}

      <div className="text-white text-xs w-min mt-3 py-1 mb-1 flex grow items-end">
        {formatCompactShowDate(date || "")}
      </div>

      <div className="text-[0.985rem] col-span-3 text-sm text-dos-grey font-space-mono">
        {description}
      </div>
    </Link>
  );
};
