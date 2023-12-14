import styles from "./card.module.css";

export default function Card({ children }: { children: any }) {
  return (
    <div className={`text-white h-min text-base border-b pb-2`}>{children}</div>
  );
}
