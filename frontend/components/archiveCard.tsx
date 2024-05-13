import Link from "next/link";
import Image from "next/image";
import {
  AllArchivesQuery,
  Archive,
  ArchiveUpload,
  ArchiveUploads,
  Host,
  Maybe,
  Show,
} from "../lib/gql/types/graphql";
import { formatCompactShowDate } from "../lib/dates";
import styles from "./archiveCard.module.css";
import BLUR_DATA_URL from "../lib/blur";

const ArchiveCardInfoSection = ({ archive }: { archive: MinArchive }) => {
  if (!archive) {
    return <div></div>;
  }
  return (
    <div className="mt-4 group-hover:opacity-75">
      <div className="flex flex-row justify-center mb-1">
        <div className="grow text-white text-lg col-span-1">
          {archive.show?.showName}
        </div>
        <div>
          <div className="text-white text-xs col-span-1 ml-5 my-auto py-1">
            {formatCompactShowDate(archive.date)}
          </div>
        </div>
      </div>
      <div className="text-white opacity-80 col-span-2 font-space-mono">
        <p>w/ {archive.hosts?.map((host) => host?.name).join(" + ")}</p>
      </div>
    </div>
  );
};

const DescriptionOrCover = ({
  description,
}: {
  description: string | null | undefined;
}) => {
  return description ? (
    <div
      className={`${styles["hide-scrollbar"]} sm:transition-opacity sm:duration-500 sm:ease-in-out
                 opacity-0 sm:group-hover:opacity-100
                 sm:w-full sm:h-full overflow-scroll sm:absolute top-0 bottom-0
                 w-0 h-0
                 hidden sm:block
                 text-white bg-black lg:text font-space-mono`}
    >
      <div className="hidden sm:block">
        <h1 className="w-full">About</h1>
        <hr className="border border-1 my-2"></hr>
        <p className="text-dos-grey break-words">{description.toString()}</p>
      </div>
    </div>
  ) : (
    <div
      className="sm:transition-opacity sm:duration-250
                 sm:ease-in-out opacity-0 sm:group-hover:opacity-50
                 sm:absolute z-1 h-0 w-0 sm:w-full sm:h-full top-0 left-0 bg-black
                 hidden sm:block"
    ></div>
  );
};

type MinArchive = {
  __typename?: "Archive";
  id?: string | null;
  subtitle?: string | null;
  fullTitle: string;
  date?: any | null;
  slug?: string | null;
  show?: {
    __typename?: "Show";
    slug: string;
    showName: string;
    id?: string | null;
  } | null;
  images?: {
    __typename?: "Archive_Images";
    imageUrl640?: string | null;
    imageUrl320?: string | null;
    imageUrl1080?: string | null;
  } | null;
  hosts?: Array<{ __typename?: "Host"; name: string }> | null;
  archiveUploads?: Array<{
    __typename?: "ArchiveUpload";
    description?: string | null;
  }> | null;
} | null;

export const ArchiveCard = ({
  archive,
  index,
  showId,
  isMobile,
}: {
  archive: MinArchive;
  showId: string | undefined;
  index: number;
  isMobile: boolean;
}) => {
  if (archive == null) return <div></div>;

  let uploadDescription: undefined | string = undefined;
  if (archive.archiveUploads && archive.archiveUploads.length > 0) {
    uploadDescription =
      archive.archiveUploads[0].description ||
      (archive.archiveUploads[1] && archive.archiveUploads[1].description) ||
      undefined;
  }

  return (
    <Link
      href={`/show/${showId}/archive/${archive.slug}`}
      key={archive.id}
      className="group p-4 h-full cursor-pointer"
    >
      <div className="group drop-shadow-lg box-content">
        <Image
          className="w-full h-auto col-span-2 row-span-2 animate-fade-in"
          blurDataURL={BLUR_DATA_URL}
          width={640}
          height={640}
          src={archive.images?.imageUrl640 || ""}
          alt={archive.fullTitle}
          priority={index <= 6}
        />
        {!isMobile && (
          <DescriptionOrCover
            description={uploadDescription}
          ></DescriptionOrCover>
        )}
      </div>
      <ArchiveCardInfoSection archive={archive}></ArchiveCardInfoSection>
    </Link>
  );
};
