import Link from "next/link";
import { useEffect, useState } from "react";

interface IGoBackLinkProps {
  fallback: string;
  isHidden?: boolean;
}

export function GoBackLink({ fallback, isHidden }: IGoBackLinkProps) {
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [prevPage, setPrevPage] = useState(fallback);

  useEffect(() => {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;
    const prev = storage.getItem("prevPath");
    const hasPrevPage = storage.getItem("hasPrevPage");
    setHasPrevPage(hasPrevPage === "true");
    setPrevPage(prev || fallback);
  }, [fallback, prevPage]);

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
