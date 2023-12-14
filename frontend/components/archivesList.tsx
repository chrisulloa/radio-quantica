import Link from "next/link";
import { formatCompactShowDate } from "../lib/dates";
import { Archive, ArchivesQuery } from "../lib/gql/types/graphql";

const colSpanNavDisabled = "col-span-1";
const colSpanNavEnabled = "col-span-1 sm:col-span-10";
const gridColsNavDisabled = "grid-cols-1";
const gridColsNavEnabled = "grid-cols-1 sm:grid-cols-11";
const gridRowsOne = "sm:grid-rows-1";
const gridRowsTwo = "sm:grid-rows-2";
const gridRowsThree = "sm:grid-rows-3";
const gridRowsFour = "sm:grid-rows-4";
const gridRowsFive = "sm:grid-rows-5";
const gridRows = [
  gridRowsOne,
  gridRowsTwo,
  gridRowsThree,
  gridRowsFour,
  gridRowsFive,
];

const dividerRow = [
  "hidden sm:block",
  "hidden sm:block sm:row-span-1",
  "hidden sm:block sm:row-span-2",
  "hidden sm:block sm:row-span-3",
  "hidden sm:block sm:row-span-4",
];

function ArchiveLink(props: {
  showPageId: string;
  fullTitle: string;
  subtitle?: string | undefined | null;
  hosts: string;
  date: string;
  slug: string;
  navDisabled: boolean;
}) {
  const className = `flex flex-row px-4 justify-between text-center p-1 text-white hover:bg-white hover:text-black row-span-1 ${
    props.navDisabled ? colSpanNavDisabled : colSpanNavEnabled
  }`;

  return (
    <Link
      className={className}
      href={`/show/${props.showPageId}/archive/${encodeURIComponent(
        props.slug
      )}`}
    >
      <div className="flex flex-row align-middle">
        {props.hosts}{" "}
        {props.subtitle && (
          <p className="text-xs ml-2 my-auto">({props.subtitle})</p>
        )}
      </div>

      <div className="text-black text-xs col-span-1 ml-5 my-auto rounded bg-white px-2 py-1">
        {formatCompactShowDate(props.date)}
      </div>
    </Link>
  );
}

function PreviousArrow({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group flex justify-center text-white hover:bg-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="group-hover:stroke-black"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  );
}

function NextArrow({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group flex justify-center text-white hover:bg-white cursor-pointer order-last sm:order-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="group-hover:stroke-black"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
  );
}

function ArchivesList(props: {
  show: ArchivesQuery | undefined;
  showPageId: string;
  fetchMore: (...args: any) => Promise<any>;
}) {
  if (!props.show?.Archives?.docs || props.show?.Archives?.docs.length === 0) {
    return <div></div>;
  }
  const data = props.show.Archives;
  const archives = props.show.Archives.docs;
  const page = data.page;

  if (!page) {
    return <div></div>;
  }

  const hasPrev = data.hasPrevPage;
  const hasNext = data.hasNextPage;

  const nextButton = () => {
    props.fetchMore({
      limit: 5,
      page: page + 1,
    });
  };

  const prevButton = () => {
    props.fetchMore({
      limit: 5,
      page: page - 1,
    });
  };

  const navDisabled = !hasPrev && !hasNext;

  // Determining the number of rows between the two nav arrows
  const dividerRowSpanClass =
    dividerRow[archives.length - (hasPrev ? 1 : 0) - (hasNext ? 1 : 0)];

  const showDivider = hasNext || (hasPrev && archives.length !== 1);
  return (
    <div
      className={`h-full grid ${
        navDisabled ? gridColsNavDisabled : gridColsNavEnabled
      } ${
        gridRows[archives.length - 1]
      } sm:grid-flow-col border border-white divide-y sm:divide-x divide-white`}
    >
      {hasPrev && <PreviousArrow onClick={prevButton} />}
      {/* {Code to handle the dividing space between the up and down arrow} */}
      {showDivider && <div className={dividerRowSpanClass} />}
      {hasNext && <NextArrow onClick={nextButton} />}
      {archives
        .filter((archive): archive is Archive => archive != null)
        .map((doc, i) => {
          return (
            <ArchiveLink
              showPageId={props.showPageId}
              slug={doc.slug || ""}
              hosts={doc?.hosts?.map((host) => host.name).join(" + ") || ""}
              fullTitle={doc.fullTitle}
              subtitle={doc.subtitle}
              date={doc.date}
              navDisabled={navDisabled}
              key={i}
            ></ArchiveLink>
          );
        })}
    </div>
  );
}

export default ArchivesList;
