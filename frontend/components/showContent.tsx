import Serialize from "./serialize";
import styles from "./content.module.css";

export function ShowContent({ content }: { content: any }) {
  return (
    <div
      id={styles.showContent}
      className="w-full text-white whitespace-pre-wrap font-space-mono text-lg"
    >
      {Serialize(content)}
    </div>
  );
}
