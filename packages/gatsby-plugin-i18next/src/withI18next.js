import React, { Component } from 'react';
import { I18nextProvider } from 'react-i18next';
import { I18nProvider } from 'gatsby-i18n';

import setupI18next from './setupI18next';

const withI18next = (options = {}) => Comp => {
  class I18n extends Component {
    constructor(props) {
      super(props);

      const { pageContext } = props;

      this.i18n = setupI18next(pageContext, this.activateLng);

      //console.log('@@@ this.i18n', this.i18n);

      //this.activateLng();
    }

    activateLng = () => {
      const { data, pageContext } = this.props;

      if (data && data.locales) {
        data.locales.edges.forEach(({ node }) => {
          const { lng, ns = 'messages', data } = node;
          const parsedData = JSON.parse(data);

          if (!this.i18n.hasResourceBundle(lng, 'messages')) {
            this.i18n.addResources(lng, 'messages', parsedData);
          }
        });
      }

      this.i18n.changeLanguage(pageContext.lng);
    };

    componentDidUpdate(prevProps) {
      if (this.props.pageContext.lng !== prevProps.pageContext.lng) {
        this.activateLng();
      }
    }

    render() {
      return (
        <I18nextProvider i18n={this.i18n}>
          <I18nProvider {...this.props.pageContext}>
            <Comp {...this.props} lng={this.props.pageContext.lng} />
          </I18nProvider>
        </I18nextProvider>
      );
    }
  }

  return I18n;
};

export default withI18next;
