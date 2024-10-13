import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://api.radioquantica.com/api/graphql",
  documents: ["lib/**/*.ts", "pages/**/*.tsx", "components/**/*.tsx"],
  generates: {
    "./lib/gql/types/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
