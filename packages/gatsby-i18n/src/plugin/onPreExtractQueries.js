import fs from 'fs-extra';

const onPreExtractQueries = async ({ store, getNodes }, pluginOptions) => {
  const program = store.getState().program;
  const fragment = `
    import { graphql } from 'gatsby';

    export const localeFragment = graphql\`
      fragment TranslationFragment on ${pluginOptions.translationsConnections ||
        `Locale`}Connection {
        edges {
          node {
            id
            lng
            ns
            data
          }
        }
      }
    \`;
`;
  const file = `${program.directory}/.cache/fragments/@igorko/fragments.js`;

  await fs.outputFile(file, fragment);
};

export default onPreExtractQueries;
