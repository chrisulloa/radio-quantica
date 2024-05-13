export default function Card({ children }: { children: any }) {
  return (
    <div className={`text-white text-lg h-min border-b pb-2`}>{children}</div>
  );
}
