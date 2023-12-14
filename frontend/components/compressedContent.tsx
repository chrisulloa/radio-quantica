import styles from "./showContent.module.css";

export function CompressedContent({
  content,
  imageURL,
}: {
  content: string;
  imageURL?: string;
}) {
  return (
    <div
      id={styles.showContent}
      className={`border border-neon-green my-auto mt-2 sm:mt-0 p-5 text-white ${
        imageURL ? "col-span-4 sm:col-span-2" : "col-span-4"
      }`}
    >
      <main dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
