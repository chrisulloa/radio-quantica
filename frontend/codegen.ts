import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:3000/api/graphql",
  documents: ["lib/**/*.ts", "pages/**/*.tsx", "components/**/*.tsx"],
  generates: {
    "./lib/gql/types/": {
      preset: "client",
      plugins: [],
      config: {
        scalars: {
          DateTime: "string",
          EmailAddress: "string",
          JSON: {
            input: "unknown",
            output: "../../lexicalNode#LexicalRootDoc",
          },
          JSONObject: "Record<string, unknown>",
        },
      },
    },
  },
};

export default config;
