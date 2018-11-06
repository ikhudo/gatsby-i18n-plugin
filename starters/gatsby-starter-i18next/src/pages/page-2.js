import React from 'react';
import { graphql } from 'gatsby';
import { I18n } from 'react-i18next';
import { Link, withI18next } from 'gatsby-plugin-i18next';

import Layout from '../components/layout';

const SecondPage = () => (
  <I18n>
    {t => (
      <Layout>
        <h1>{t('Hi from the second page')}</h1>
        <p>{t('Welcome to page 2')}</p>
        <Link to="/">{t('Go back to the homepage')}</Link>
      </Layout>
    )}
  </I18n>
);

export default withI18next()(SecondPage);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }
  }
`;
