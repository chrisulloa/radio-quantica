import {
  donatePageInfoQuery,
  aboutPageInfoQuery,
} from "./gql/documents/queries";
import { LocaleInputType } from "./gql/types/graphql";
import client from "./services/graphql";

export const getAboutPageInfo = async (locale: LocaleInputType) => {
  const { data } = await client.query({
    query: aboutPageInfoQuery,
    fetchPolicy: "no-cache",
    variables: {
      locale,
    },
  });
  return data.AboutPage?.content;
};

export const getDonatePageInfo = async (locale: LocaleInputType) => {
  const { data } = await client.query({
    query: donatePageInfoQuery,
    fetchPolicy: "no-cache",
    variables: {
      locale,
    },
  });
  return data.DonatePage;
};
