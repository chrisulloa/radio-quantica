import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://squid-app-svk3v.ondigitalocean.app/api/graphql",
  documents: ["lib/**/*.ts", "pages/**/*.tsx", "components/**/*.tsx"],
  generates: {
    "./lib/gql/types/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
