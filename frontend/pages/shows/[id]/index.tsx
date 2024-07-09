import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Card from "../../../components/card";
import GoBackLink from "../../../components/goBack";
import { ShowContent } from "../../../components/showContent";
import { getAllShowIDs, getShowData, ShowData } from "../../../lib/shows";

export async function getStaticPaths() {
  const allShowIDs = await getAllShowIDs();
  const paths = allShowIDs.map((show) => ({
    params: { id: show.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const show = await getShowData(params.id);
  if (!show) return { props: { showPageId: params.id } };
  const showNameAndHost = `${show.title} w/ ${show.host}`;
  const title = `${showNameAndHost} - PARTICLE.FM`;

  return {
    props: {
      showPageId: params.id,
      show,
      content: show.content,
      showNameAndHost,
      title,
    },
  };
}

export default function Show({
  showPageId,
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
    <div className="mx-5 sm:ml-10 grid grid-cols-4 md:w-5/6 lg:w-3/6">
      <Head>
        <title>{title}</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@quanticaonline" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={title} />
        <meta
          name="twitter:image"
          content="https://cdn.particle.fm/socials/particle-fm-socials-banner.jpg"
        />

        <meta property="og:site_name" content="Rádio Quântica"></meta>
        <meta property="og:title" content={title}></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:url"
          content={`https://particle.fm${router.asPath}`}
        ></meta>
        <meta property="og:description" content={title} />
        <meta
          property="og:image"
          content="https://cdn.particle.fm/socials/particle-fm-socials-banner.jpg"
        ></meta>
        <meta
          property="og:image:secure_url"
          content="https://cdn.particle.fm/socials/particle-fm-socials-banner.jpg"
        ></meta>
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
      <div className="col-span-4 flex flex-wrap gap-y-5 gap-x-5 mt-5">
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
      <ShowContent content={content} />
      <hr className="mt-8 mb-6 col-span-4"></hr>
      <div className="col-span-4 ">
        <GoBackLink fallback="/"></GoBackLink>
      </div>
    </div>
  );
}
