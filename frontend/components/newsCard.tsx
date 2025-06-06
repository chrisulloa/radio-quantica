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
  priority = false,
}: {
  link: string;
  title: string;
  description: string;
  newWindow?: boolean;
  date?: string;
  previewBannerUrl?: string | null;
  priority: boolean;
}) => {
  return (
    <Link
      href={link}
      target={newWindow ? "_blank" : ""}
      className="pb-3 h-full cursor-pointer text-white group sm:hover:opacity-50 flex flex-col"
    >
      <div className="flex items-end w-full font-space-mono justify-end">
        <div className="text-white text-sm w-min">
          {formatCompactShowDate(date || "")}
        </div>
      </div>
      {previewBannerUrl && (
        <div className="mt-1 mb-3 overflow-hidden relative h-80 w-full">
          <Image
            src={previewBannerUrl}
            alt={title}
            fill={true}
            style={{
              objectFit: "contain",
            }}
            sizes="(max-width: 768px) 38vw, 28vw"
            priority={priority}
          ></Image>
        </div>
      )}
      <h1 className="text-md border-b-black border-b w-fit">{title}</h1>
      <div className="text-[0.985rem] col-span-3 text-sm text-dos-grey font-space-mono flex grow items-start">
        {description}
      </div>
    </Link>
  );
};
