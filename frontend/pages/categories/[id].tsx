import Head from "next/head";
import toUpper from "lodash/toUpper";
import GoBackLink from "../../components/goBack";
import ShowCard from "../../components/showCard";
import {
  getAllCategories,
  getShowsByCategory,
  ShowData,
} from "../../lib/shows";

export async function getStaticPaths() {
  const categories = await getAllCategories();
  const paths = categories.map((category) => ({
    params: { id: category },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const shows = await getShowsByCategory(params.id);
  const category = params.id;

  return { props: { shows, category } };
}

export default function CategoryPage({
  shows,
  category,
}: {
  shows: ShowData[];
  category: string;
}) {
  const categoryUppercase = toUpper(category);
  const title = `${categoryUppercase} - Rádio Quântica`;
  return (
    <div className="w-full px-4 md:px-0 md:ml-8 md:w-10/12 sm:w-2/4 mb-8">
      <Head>
        <title>{title}</title>
      </Head>
      <div>
        <div className="flex justify-between mb-4">
          <h2 className="text-white">{categoryUppercase}</h2>
          <GoBackLink fallback="/"></GoBackLink>
        </div>
        <hr></hr>
        <div className=" grid gap-9 grid-cols-1 sm:grid-cols-3 mt-4">
          {shows.map(({ id, title, host, image }) => (
            <ShowCard
              key={id}
              id={id}
              title={title}
              host={host}
              image={image}
            ></ShowCard>
          ))}
        </div>
      </div>
    </div>
  );
}
