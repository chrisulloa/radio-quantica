import Link from "next/link";
import { useSyncExternalStore } from "react";

interface IGoBackLinkProps {
  fallback: string;
  isHidden?: boolean;
}

const subscribeToNothing = () => () => {};

export function GoBackLink({ fallback, isHidden }: IGoBackLinkProps) {
  const hasPrevPage = useSyncExternalStore(
    subscribeToNothing,
    () => globalThis?.sessionStorage?.getItem("hasPrevPage") === "true",
    () => false,
  );
  const prevPage = useSyncExternalStore(
    subscribeToNothing,
    () => globalThis?.sessionStorage?.getItem("prevPath") || fallback,
    () => fallback,
  );

  return hasPrevPage ? (
    <Link
      type="button"
      className="text-white px-2 hover:text-black hover:bg-white text-md"
      href={prevPage}
    >
      ← Back
    </Link>
  ) : (
    <div className={isHidden ? "hidden" : ""}></div>
  );
}

export default GoBackLink;
