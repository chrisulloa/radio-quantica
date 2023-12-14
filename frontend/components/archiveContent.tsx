import Serialize from "./serialize";
import styles from "./showContent.module.css";

export function ArchiveContent({
  content,
  uploadDescription,
}: {
  content: any;
  uploadDescription: string;
}) {
  return (
    <div
      id={styles.showContent}
      className="col-span-4 text-dos-grey whitespace-pre-wrap"
    >
      {uploadDescription || Serialize(content)}
    </div>
  );
}
