import Link from "next/link";
import React from "react";
import usePagination from "../hooks/usePagination";

export type PaginationProps = {
  totalPages: number;
  currentPage: number;
  renderPageLink: (page: number) => string;
};

export const dotts = "...";

const Pagination = ({
  totalPages,
  currentPage,
  renderPageLink,
}: PaginationProps) => {
  const pages = usePagination(totalPages, currentPage);

  return (
    <div className="flex items-center justify-center my-8 text-white">
      Page
      {pages.map((pageNumber, i) =>
        pageNumber === dotts ? (
          <span key={i} className="px-4 font-semibold text-dos-grey">
            {pageNumber}
          </span>
        ) : (
          <Link
            key={i}
            href={renderPageLink(pageNumber as number)}
            className={`${
              pageNumber === currentPage
                ? "text-dos-grey pointer-events-none cursor-default"
                : "text-white  hover:text-dos-grey"
            } px-2 mx-1 font-semibold no-underline`}
          >
            {pageNumber}
          </Link>
        )
      )}
    </div>
  );
};

export default Pagination;
