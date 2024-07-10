import { ShowImage } from "../lib/shows";
import Card from "./card";
import Link from "next/link";
import Image from "next/image";

export default function ShowCard({
  id,
  title,
  host,
  image,
}: {
  id: string;
  title: string;
  host: string;
  image: ShowImage | null | undefined;
}) {
  console.log(image);
  return (
    <div className={`text-white text-lg h-min pb-2`}>
      <div className="leading-tight tracking-tight text-[18px] break-words">
        <Link
          href={`/shows/${id}`}
          className="hover:opacity-80 hover:text-dos-grey"
        >
          {title} w/ {host}
          {image &&
            image.alt &&
            image.sizes?.sm?.url &&
            image.sizes?.sm?.height &&
            image.sizes?.sm?.width && (
              <Image
                className="mt-4"
                alt={image.alt}
                src={image.sizes?.sm?.url}
                width={image.sizes.sm.width}
                height={image.sizes.sm.height}
              ></Image>
            )}
        </Link>
      </div>
    </div>
  );
}
