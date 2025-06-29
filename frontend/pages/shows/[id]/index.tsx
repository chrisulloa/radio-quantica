import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Card from "../../../components/card";
import GoBackLink from "../../../components/goBack";
import { ShowContent } from "../../../components/showContent";
import { getAllShowIDs, getShowData, ShowData } from "../../../lib/shows";
import { defaultOgImage } from "../../../lib/utils";

export async function getStaticPaths() {
  const allShowIDs = await getAllShowIDs();
  const paths = allShowIDs.map((show) => ({
    params: { id: show.id },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const show = await getShowData(params.id);
  if (!show) return { notFound: true, revalidate: false };
  const showNameAndHost = `${show.title} w/ ${show.host}`;
  const title = `${showNameAndHost} - Rádio Quântica`;

  return {
    props: {
      show,
      content: show.content,
      showNameAndHost,
      title,
    },
  };
}

export default function Show({
  show,
  content,
  title,
  showNameAndHost,
}: {
  showPageId: string;
  show: ShowData;
  content: any;
  title: string;
  showNameAndHost: string;
}) {
  const router = useRouter();

  return (
    <div className="mx-5 sm:ml-10 grid grid-cols-4 md:w-5/6 lg:w-4/6 xl:2/6">
      <Head>
        <title>{title}</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@quanticaonline" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={title} />
        <meta name="twitter:image" content={defaultOgImage} />

        <meta property="og:site_name" content="Rádio Quântica"></meta>
        <meta property="og:title" content={title}></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:url"
          content={`https://radioquantica.com/${router.asPath}`}
        ></meta>
        <meta property="og:description" content={title} />
        <meta property="og:image" content={defaultOgImage}></meta>
        <meta property="og:image:secure_url" content={defaultOgImage}></meta>
        <meta property="og:image:width" content="1200"></meta>
        <meta property="og:image:height" content="630"></meta>
        <meta
          property="og:image:alt"
          content="Rádio Quântica Social Media Banner"
        ></meta>
        <meta property="og:image:type" content="image/jpg"></meta>
      </Head>
      <div className="col-span-4">
        <Card>{showNameAndHost}</Card>
      </div>

      <div className="grid grid-cols-6 w-full col-span-4 mt-4 gap-4">
        <div className="w-full col-span-6 md:col-span-3 flex justify-center align-top h-full">
          {show.image &&
            show.image.sizes?.lg &&
            show.image.sizes.lg.url &&
            show.image.sizes.lg.width &&
            show.image.sizes.lg.height && (
              <Image
                className="max-h-[60vh] h-min object-scale-down"
                alt={show.image.alt || `${show.title} image`}
                src={show.image.sizes?.lg.url}
                height={show.image.sizes?.lg?.height}
                width={show.image.sizes?.lg?.width}
              ></Image>
            )}
        </div>
        <div className="col-span-6 md:col-span-3">
          <ShowContent content={content} />
        </div>
      </div>
      <div className="col-span-4 flex flex-wrap gap-y-5 gap-x-5 mt-4 mb-4">
        {show.categories.map((category) => {
          return (
            <Link
              href={`/categories/${category}`}
              key={category}
              className="text-center leading-tight w-fit h-fit px-5 py-1 border text-white border-white hover:bg-white hover:text-black text-sm"
            >
              {category}
            </Link>
          );
        })}
      </div>
      <hr className="col-span-4"></hr>
      <div className="col-span-4 mt-4">
        <GoBackLink fallback="/"></GoBackLink>
      </div>
    </div>
  );
}
