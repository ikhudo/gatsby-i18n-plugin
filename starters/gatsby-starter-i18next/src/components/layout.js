import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Head } from 'gatsby-plugin-i18next';

import Header from './header';
import './layout.css';

const Layout = ({ children, data, t }) => (
  <>
    <Head hreflang>
      <title>{t('Gatsby Starter I18next')}</title>
      <meta name="description" content="Sample" />
      <meta name="keywords" content="gatsby, react, wapps, i18next" />
    </Head>
    <Header siteTitle={t('Gatsby Starter I18next')} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children}
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default translate()(Layout);
