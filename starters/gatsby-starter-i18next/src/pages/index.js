import React from 'react';
import { graphql } from 'gatsby';
import { I18n } from 'react-i18next';
import { Link, withI18next } from '@igorko/gatsby-plugin-i18next';

import Layout from '../components/layout';

const IndexPage = () => (
  <I18n>
    {t => (
      <Layout>
        <h1>{t('Hi people')}</h1>
        <p>{t('Welcome to your new Gatsby site.')}</p>
        <p>{t('Now go build something great.')}</p>
        <Link to="/page-2/">{t('Go to page 2')}</Link>
      </Layout>
    )}
  </I18n>
);

export default withI18next()(IndexPage);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...LocaleFragment
    }
  }
`;
