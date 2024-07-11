import { useCallback, useEffect, useMemo, useState } from "react";
import fuzzysort from "fuzzysort";
import debounce from "lodash/debounce";
import ShowCard from "../components/showCard";
import CategoriesCard from "../components/categoriesCard";
import { SearchIcon } from "../components/searchIcon";
import {
  ShowData,
  ShowImage,
  getAllCategories,
  getAllShowData,
} from "../lib/shows";
import Head from "next/head";

export async function getStaticProps() {
  const categories = await getAllCategories();
  const allShowData = await getAllShowData(true);
  return {
    props: {
      categories,
      allShowData,
    },
  };
}

const ShowsPageHeader = () => (
  <Head>
    <title>Shows - Rádio Quântica</title>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@quanticaonline" />
    <meta name="twitter:title" content="Rádio Quântica | Shows" />
    <meta name="twitter:description" content="Rádio Quântica Shows" />
    <meta
      name="twitter:image"
      content="https://radio-quantica.ams3.cdn.digitaloceanspaces.com/assets/radio_quantica_social_banner.jpg"
    />

    <meta property="og:site_name" content="Rádio Quântica"></meta>
    <meta property="og:title" content="Rádio Quântica Shows"></meta>
    <meta property="og:type" content="website"></meta>
    <meta
      property="og:url"
      content="https://radio-quantica.vercel.app/shows"
    ></meta>
    <meta property="og:description" content="Rádio Quântica Shows" />
    <meta
      property="og:image"
      content="https://radio-quantica.ams3.cdn.digitaloceanspaces.com/assets/radio_quantica_social_banner.jpg"
    ></meta>
    <meta
      property="og:image:secure_url"
      content="https://radio-quantica.ams3.cdn.digitaloceanspaces.com/assets/radio_quantica_social_banner.jpg"
    ></meta>
    <meta property="og:image:width" content="1200"></meta>
    <meta property="og:image:height" content="630"></meta>
    <meta
      property="og:image:alt"
      content="Rádio Quântica Social Media Banner"
    ></meta>
    <meta property="og:image:type" content="image/jpg"></meta>
  </Head>
);

export default function Shows({
  categories,
  allShowData,
}: {
  categories: string[];
  allShowData: ShowData[];
}) {
  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  const [shows, setShows] = useState<ShowData[]>(allShowData);
  const handleSearch = useCallback(
    (e: any) => {
      e.preventDefault();
      const val = e.target.value;
      if (val) {
        const results = fuzzysort.go(val, allShowData, {
          keys: ["host", "title", "description"],
          threshold: -25000,
        });
        setShows(results.map((r) => r.obj));
      } else {
        setShows(allShowData);
      }
    },
    [allShowData]
  );
  const debouncedResults = useMemo(() => {
    return debounce(handleSearch, 200);
  }, [handleSearch]);
  return (
    <div className="grid gap-y-5 md:gap-36 lg:gap-42 w-11/12 md:w-9/12 2xl:w-7/12 md:ml-8 mx-auto grid-cols-1 md:grid-cols-6 mb-8">
      <ShowsPageHeader></ShowsPageHeader>
      <div className="col-span-1 md:my-0 sm:col-span-4">
        <h1 className="text-white">RADIO SHOWS</h1>
        <form
          autoComplete={"off"}
          id="chatInput"
          className="flex flex-row mt-2 mb-8 divide-white borderborder-white justify-end"
          onChange={debouncedResults}
        >
          <input
            id="filterShows"
            name="Search"
            className="text-white  text-sm bg-black w-full focus:outline-none border-b"
            placeholder="Search..."
          ></input>
          <div className="tracking-wide rounded text-sm text-white p-2">
            <SearchIcon></SearchIcon>
          </div>
        </form>
        <div className="grid gap-7 sm:gap-9 grid-cols-1 md:grid-cols-3">
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
      <div className="col-span-1 my-5 md:my-0 md:mt-0 sm:col-span-2">
        <h1 className="text-white mb-5">CATEGORIES</h1>
        <CategoriesCard categories={categories}></CategoriesCard>
      </div>
    </div>
  );
}
