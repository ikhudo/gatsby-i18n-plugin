import React from 'react';
import { graphql } from 'gatsby';
import { withLingui } from '@igorko/gatsby-plugin-lingui';

import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default withLingui()(NotFoundPage);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...LocaleFragment
    }
  }
`;
