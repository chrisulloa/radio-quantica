import Head from "next/head";
import Image from "next/image";
import Card from "../../../../components/card";
import client from "../../../../lib/services/graphql";
import { getShowData } from "../../../../lib/shows";
import { useRouter } from "next/router";
import MixcloudButton from "../../../../components/mixcloudButton";
import SoundcloudButton from "../../../../components/soundcloudButton";
import ShareButton from "../../../../components/shareButton";
import Link from "next/link";
import { formatCompactShowDate, formatShowDate } from "../../../../lib/dates";
import GoBackLink from "../../../../components/goBack";
import { showArchiveBySlug } from "../../../../lib/gql/documents/queries";
import { ArchiveBySlugQuery } from "../../../../lib/gql/types/graphql";
import RichTextNode from "../../../../lib/textNode";
import { ArchiveContent } from "../../../../components/archiveContent";

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps({
  params,
}: {
  params: { id: string; archiveSlug: string };
}) {
  const showData = await getShowData(params.id);
  if (!showData) return null;
  const { data } = await client.query({
    query: showArchiveBySlug,
    fetchPolicy: "no-cache",
    variables: { where: { slug: { equals: params.archiveSlug } } },
  });
  const archive = data.Archives?.docs ? data.Archives.docs[0] : undefined;
  const uploadDescription =
    archive?.archiveUploads?.find((upload) => upload.description != null)
      ?.description || null;
  const formattedShowDate =
    archive?.date && formatCompactShowDate(archive?.date);
  return {
    props: {
      archives: data.Archives,
      formattedShowDate,
      uploadDescription,
      content: showData.content,
      showId: params.id,
      showTitle: showData.title,
    },
  };
}

const ArchivePageHeader = ({
  archives,
  currentPath,
}: {
  archives: ArchiveBySlugQuery["Archives"];
  currentPath: string;
}) => {
  const archive = archives?.docs && archives?.docs[0];
  if (!archive) return <div></div>;
  return (
    <Head>
      <title>{archive?.fullTitle}</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@particlefm" />
      <meta
        name="twitter:title"
        content={`PARTICLE.FM | ${archive?.fullTitle}`}
      />
      <meta name="twitter:description" content={"DIY Community Radio"} />
      <meta
        name="twitter:image"
        content={archive?.images?.imageUrl1080 || ""}
      />

      <meta property="og:site_name" content="PARTICLE.FM"></meta>
      <meta
        property="og:title"
        content={`Particle FM | ${archive?.fullTitle}`}
      ></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:description" content="DIY Community Radio" />
      <meta
        property="og:url"
        content={`https://particle.fm${currentPath}`}
      ></meta>
      <meta
        property="og:image"
        content={archive?.images?.imageUrl640 || ""}
      ></meta>
    </Head>
  );
};

function ArchivePage({
  showId,
  showTitle,
  uploadDescription,
  archives,
  formattedShowDate,
  content,
}: {
  showId: string;
  showTitle: string;
  uploadDescription: string;
  formattedShowDate: string | undefined;
  archives: ArchiveBySlugQuery["Archives"];
  content: RichTextNode[];
}) {
  const router = useRouter();
  const archive = archives?.docs && archives?.docs[0];
  if (archive) {
    const hostNames = archive.hosts?.map((host) => host.name).join(" + ");
    return (
      <div className="mx-5 mb-5 sm:ml-10 sm:w-5/6 md:w-5/6 lg:w-4/6 xl:w-3/6 grid grid-cols-4 gap-1 sm:gap-8">
        <ArchivePageHeader
          archives={archives}
          currentPath={router.asPath}
        ></ArchivePageHeader>
        <div className="col-span-4 mb-4 sm:mb-0">
          <Card>
            {showTitle} w/ {hostNames}
          </Card>
        </div>
        <div
          className="my-auto flex flex-wrap
                     justify-center col-span-4 mt-4 sm:mt-0 sm:col-span-2"
        >
          <Image
            className="animate-fade-in"
            alt={archive.fullTitle}
            src={archive.images?.imageUrl640 || ""}
            width="400"
            height="400"
            priority
          />
        </div>
        <div className="my-auto mt-2 sm:mt-0 px-5 col-span-4 sm:col-span-2 text-white">
          <div className="flex justify-end gap-4 col-span-3 w-full items-center mb-3">
            <div className="flex text-white text-base break-words grow">
              {formattedShowDate}
            </div>
            {archive.archiveUploads?.map((upload) => {
              return (
                <div key={upload.id} className="col-span-1">
                  {upload.service === "mixcloud" ? (
                    <MixcloudButton url={upload.url} />
                  ) : (
                    <SoundcloudButton url={upload.url} />
                  )}
                </div>
              );
            })}
            <ShareButton
              text={`Tune in to ${archive.fullTitle} on Particle FM`}
            ></ShareButton>
          </div>
          <ArchiveContent
            content={content}
            uploadDescription={uploadDescription}
          ></ArchiveContent>
        </div>
        <div className="mt-2 sm:mt-0 col-span-4 flex justify-between">
          <GoBackLink fallback={`/show/${showId}`}></GoBackLink>
          <Link
            className="text-white px-2 hover:bg-white hover:text-black"
            href={`/show/${showId}`}
          >
            Show Page →
          </Link>
        </div>
      </div>
    );
  }
  return <div></div>;
}

export default ArchivePage;
