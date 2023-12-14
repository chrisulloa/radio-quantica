import RichTextNode from "../lib/textNode";
import Serialize from "./serialize";
import styles from "./showContent.module.css";

export default function NewsContent({ content }: { content: RichTextNode[] }) {
  return (
    <div
      id={styles.showContent}
      className="text-dos-grey px-5 py-3 whitespace-pre-wrap"
    >
      {Serialize(content)}
    </div>
  );
}
