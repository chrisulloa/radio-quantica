import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextCoreWebVitals,
  {
    ignores: [".next/*", "node_modules/*", "lib/gql/types/*"],
  },
];

export default eslintConfig;
