/** @type {import('@graphql-codegen/cli').CodegenConfig} */
const config = {
  schema: "http://localhost:3000/api/graphql",
  documents: ["lib/**/*.ts", "pages/**/*.tsx", "components/**/*.tsx"],
  generates: {
    "./lib/gql/types/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false,
      },
      plugins: [],
    },
  },
};

module.exports = config;
