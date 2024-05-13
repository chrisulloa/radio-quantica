import Serialize from "./serialize";
import styles from "./showContent.module.css";

export function ShowContent({ content }: { content: any }) {
  return (
    <div
      id={styles.showContent}
      className="col-span-4 text-white pt-5 whitespace-pre-wrap font-space-mono text-lg"
    >
      {Serialize(content)}
    </div>
  );
}
