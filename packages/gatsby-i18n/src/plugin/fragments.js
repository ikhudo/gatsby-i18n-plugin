import { graphql } from 'gatsby';

export const localeFragment = graphql`
  fragment LocaleFragment on LocaleConnection {
    edges {
      node {
        id
        lng
        ns
        data
      }
    }
  }
`;
