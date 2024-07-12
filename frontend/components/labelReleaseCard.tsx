import Link from "next/link";
import Image from "next/image";

export const LabelReleaseCard = ({
  link,
  title,
  blurb,
  imageUrl,
}: {
  link: string;
  title: string;
  blurb: string;
  imageUrl?: string | null;
}) => {
  return (
    <Link
      href={link}
      target={"_blank"}
      className="flex flex-col px-4 py-3 h-full rounded-xl cursor-pointer text-white group sm:hover:opacity-50"
    >
      {imageUrl && (
        <div className="mt-1 mb-3">
          <Image
            className="w-full"
            src={imageUrl}
            alt={title}
            width={300}
            height={300}
          ></Image>
        </div>
      )}
      <h1 className="text-md mb-1 border-black border-b w-fit">{title}</h1>
      <div className="text-dos-grey text-[0.985rem] col-span-3 text-sm font-space-mono">
        {blurb}
      </div>
    </Link>
  );
};
