import Link from "next/link";
import Image from "next/image";

export const MerchPreviewCard = ({
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
      className="px-4 py-3 h-full rounded-xl cursor-pointer text-white group hover:opacity-50"
    >
      {imageUrl && (
        <div className="mt-1 mb-3 overflow-hidden relative h-60 w-full">
          <Image
            className="object-cover"
            src={imageUrl}
            alt={title}
            fill={true}
          ></Image>
        </div>
      )}
      <h1 className="text-lg mb-3 border-black border-b w-fit">{title}</h1>
      <div className="text-dos-grey text-[0.985rem] col-span-3 text-xs">
        {blurb}
      </div>
    </Link>
  );
};
