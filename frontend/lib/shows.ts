import uniq from "lodash/uniq";
import client from "./services/graphql";
import {
  allCategories,
  showBySlug,
  showsByCategory,
  showsQuery,
  allShowIDs,
} from "./gql/documents/queries";
import { Show } from "./gql/types/graphql";
import RichTextNode from "./textNode";

interface ShowMetadata {
  title: string;
  host: string;
  date: string;
  hidden: boolean;
  description: string;
  categories: string[];
}

export interface ShowImage {
  __typename?: "Media";
  alt?: string | null;
  sizes?: {
    __typename?: "Media_Sizes";
    lg?: {
      __typename?: "Media_Sizes_Lg";
      url?: string | null;
      width?: number | null;
      height?: number | null;
    } | null;
    sm?: {
      __typename?: "Media_Sizes_Sm";
      url?: string | null;
      width?: number | null;
      height?: number | null;
    } | null;
  } | null;
}

export interface ShowData extends ShowMetadata {
  id: string;
  content?: RichTextNode[];
  image?: ShowImage | null;
}

export interface ShowIDMapping {
  id: string;
  title: string;
  host: string;
}

export async function getShowData(slug: string): Promise<ShowData | null> {
  const { data } = await client.query({
    query: showBySlug,
    variables: {
      slug,
    },
    fetchPolicy: "no-cache",
  });

  if (!data.ShowBySlug) return null;

  const show = data.ShowBySlug;
  return {
    id: slug,
    content: show.description,
    image: show.coverImage,
    title: show.showName,
    host: show.primaryHosts.map((host) => host.name).join(" + "),
    date: show.createdAt,
    hidden: false,
    description: "",
    categories: show.categories?.map((c) => c.name) || [],
  };
}

const isShowDataElement = (item: ShowData | undefined): item is ShowData => {
  return !!item;
};

export async function getAllShowData(
  excludeHidden = false
): Promise<ShowData[]> {
  const { data } = await client.query({
    query: showsQuery,
    variables: {
      limit: 100,
    },
    fetchPolicy: "no-cache",
  });
  if (data.Shows && data.Shows.docs) {
    const res = data.Shows.docs
      .filter((doc): doc is Show => doc != null)
      .map((doc): ShowData | undefined => {
        if (doc != null) {
          return {
            id: doc.slug,
            content: doc.description,
            categories: doc.categories?.map((c) => c.name) || [],
            hidden: doc.active === false,
            title: doc.showName,
            host: doc.primaryHosts.map((host) => host.name).join(" + "),
            date: doc.createdAt,
            description: "",
            image: doc.coverImage,
          };
        }
      })
      .filter(isShowDataElement)
      .sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1;
        }
        return 0;
      });

    if (excludeHidden) {
      return res.filter((show) => !show.hidden);
    }

    return res;
  } else {
    return [];
  }
}

export async function getAllShowIDs(): Promise<ShowIDMapping[]> {
  const { data } = await client.query({
    query: allShowIDs,
    variables: { limit: 100 },
    fetchPolicy: "no-cache",
  });
  if (!data.Shows?.docs) return [];
  return data.Shows.docs
    .filter(
      (
        value
      ): value is Pick<
        Show,
        "__typename" | "id" | "showName" | "primaryHosts" | "slug"
      > => value != null
    )
    .map((value) => ({
      id: value.slug,
      title: value.showName,
      host: value.primaryHosts.map((host) => host.name).join(" + "),
    }));
}

export async function getShowsByCategory(
  category: string
): Promise<ShowData[]> {
  const { data } = await client.query({
    query: showsByCategory,
    variables: {
      categoryName: category,
    },
    fetchPolicy: "no-cache",
  });

  if (data.ShowsByCategory == null || data.ShowsByCategory.docs == null)
    return [];

  return data.ShowsByCategory.docs
    .filter((doc): doc is Show => doc != null)
    .map((doc) => {
      return {
        id: doc.slug,
        title: doc.showName,
        host: doc.primaryHosts.map((host) => host.name).join(" + "),
        hidden: false,
        date: doc.createdAt,
        description: doc.description.toString(),
        categories: doc.categories?.map((category) => category.name) || [],
        image: doc.coverImage,
      };
    });
}

export async function getAllCategories() {
  const { data } = await client.query({
    query: allCategories,
    variables: { limit: 100 },
    fetchPolicy: "no-cache",
  });

  const categories = data.Categories?.docs?.map((doc) => doc?.name);

  return uniq(categories).sort() || [];
}
