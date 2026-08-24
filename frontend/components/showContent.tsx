import { LexicalRootDoc } from "../lib/lexicalNode";
import SerializeLexical from "./serializeLexical";
import styles from "./content.module.css";

export function ShowContent({ content }: { content: LexicalRootDoc }) {
  return (
    <div
      id={styles.richText}
      className="w-full text-white whitespace-pre-wrap font-space-mono text-lg"
    >
      {SerializeLexical(content)}
    </div>
  );
}
