import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';

import { I18nConsumer } from './I18nContext';

const Link = ({ to, lng, children, ...rest }) => {
  return (
    <GatsbyLink to={lng ? `/${lng}${to}` : `${to}`} {...rest}>
      {children}
    </GatsbyLink>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default props => (
  <I18nConsumer>{({ lng }) => <Link lng={lng} {...props} />}</I18nConsumer>
);
