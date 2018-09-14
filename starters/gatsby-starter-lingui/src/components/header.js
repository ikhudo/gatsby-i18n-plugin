import React from 'react';
import { Link } from '@igorko/gatsby-plugin-lingui';

import Switcher from './switcher';

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
      }}
    >
      <Switcher />
    </div>
  </div>
);

export default Header;
