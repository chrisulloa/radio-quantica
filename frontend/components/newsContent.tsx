import RichTextNode from "../lib/textNode";
import Serialize from "./serialize";
import styles from "./content.module.css";
import Image from "next/image";

export default function NewsContent({
  content,
  image,
}: {
  content: RichTextNode[];
  image: {
    url?: string | null;
    alt: string;
  };
}) {
  if (!content) {
    return <></>;
  }
  console.log(image.url);
  return (
    <div
      id={styles.showContent}
      className="text-dos-grey px-5 py-3 whitespace-pre-wrap font-space-mono leading-8 break-words"
    >
      {image.url && (
        <div className="relative h-[40vh] md:h-[650px] w-full text-right my-8">
          <Image
            src={image.url}
            alt={image.alt}
            fill
            className="object-contain h-full w-full left-0"
          ></Image>
        </div>
      )}
      {Serialize(content)}
    </div>
  );
}
