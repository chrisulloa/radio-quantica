import { LexicalRootDoc } from "../lib/lexicalNode";
import SerializeLexical from "./serializeLexical";
import styles from "./content.module.css";
import Image from "next/image";
import LightboxImage from "./lightboxImage";

export default function NewsContent({
  content,
  image,
}: {
  content: LexicalRootDoc;
  image: {
    url?: string | null;
    alt: string;
    width?: number | null;
    height?: number | null;
  };
}) {
  if (!content) {
    return <></>;
  }
  return (
    <div
      id={styles.richText}
      className="text-white px-5 py-3 whitespace-pre-wrap font-space-mono leading-8 break-words"
    >
      {image.url && (
        <div className="relative h-[40vh] md:h-[650px] w-full text-right my-8">
          <LightboxImage
            src={image.url}
            alt={image.alt}
            width={image.width || 1200}
            height={image.height || 630}
            className="h-full w-full object-contain"
            fullSrc={image.url}
          ></LightboxImage>
        </div>
      )}
      {SerializeLexical(content)}
    </div>
  );
}
