import React, { Component } from 'react';
import { I18nProvider as LinguiProvider } from '@lingui/react';
import { setupI18n } from '@lingui/core';
import { I18nProvider } from '@igorko/gatsby-i18n';

const convert = data =>
  JSON.parse(data, function(key, value) {
    if (
      typeof value === 'string' &&
      value.startsWith('/Function(') &&
      value.endsWith(')/')
    ) {
      value = value.substring(10, value.length - 2);
      return eval('(' + value + ')');
    }
    return value;
  });

const withLingui = (options = {}) => Comp => {
  class I18n extends Component {
    constructor(props) {
      super(props);
      this.i18n = setupI18n();
      this.activateLng();
    }

    activateLng = () => {
      const { data, pageContext } = this.props;

      const catalogs = {};
      if (data.locales) {
        data.locales.edges.forEach(({ node }) => {
          const { lng, ns, data } = node;
          catalogs[lng] = {
            [ns]: JSON.parse(data),
          };
        });
      }

      this.i18n.load(catalogs);
      this.i18n.activate(pageContext.lng);
    };

    componentDidUpdate(prevProps) {
      if (this.props.pageContext.lng !== prevProps.pageContext.lng) {
        this.activateLng();
        this.forceUpdate();
      }
    }

    render() {
      return (
        <LinguiProvider i18n={this.i18n}>
          <I18nProvider {...this.props.pageContext}>
            <Comp {...this.props} />
          </I18nProvider>
        </LinguiProvider>
      );
    }
  }

  return I18n;
};

export default withLingui;
