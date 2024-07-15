import Link from "next/link";
import Image from "next/image";

export const MerchCard = ({
  link,
  title,
  blurb,
  soldOut,
  imageUrl,
}: {
  link: string;
  title: string;
  blurb: string;
  soldOut: boolean;
  imageUrl?: string | null;
}) => {
  return (
    <Link
      href={link}
      target={"_blank"}
      className="px-4 py-3 h-full rounded-xl cursor-pointer text-white group sm:hover:opacity-50 box-content"
    >
      {imageUrl && (
        <div className="mt-1 mb-3 overflow-hidden relative h-60 w-full">
          <Image
            className="object-cover"
            src={imageUrl}
            alt={title}
            fill={true}
          ></Image>
          {soldOut && (
            <div className="text-red font-space-mono w-full h-full text-sm absolute top-0 bottom-0 flex justify-end">
              <div className="bg-[#eb0000] text-white w-fit px-2 h-fit">
                Sold Out
              </div>
            </div>
          )}
        </div>
      )}
      <h1 className="text-md mb-1 border-black border-b w-fit">{title}</h1>
      <div className="text-dos-grey text-[0.985rem] col-span-3 text-sm font-space-mono">
        {blurb}
      </div>
    </Link>
  );
};
