import RichTextNode from "../lib/textNode";
import Serialize from "./serialize";
import styles from "./content.module.css";

export default function NewsContent({ content }: { content: RichTextNode[] }) {
  if (!content) {
    return <></>;
  }
  return (
    <div
      id={styles.showContent}
      className="text-dos-grey px-5 py-3 whitespace-pre-wrap font-space-mono leading-8 break-words"
    >
      {Serialize(content)}
    </div>
  );
}
