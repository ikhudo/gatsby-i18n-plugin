# gatsby-plugin-i18next
> [Gatsby](https://github.com/gatsbyjs/gatsby) plugin that provides i18n support.

## Installation
```sh
yarn add @igorko/gatsby-plugin-i18next
# npm install --save @igorko/gatsby-plugin-i18next
```

## Usage
Edit `gatsby-config.js`

```javascript
module.exports = {
  plugins: [
    {
      resolve: `@igorko/gatsby-plugin-i18next`,
      options: {
        // Add any options here
      },
    },
  ],
}
```

# Options
You can pass options to the plugin:
- availableLngs (Array [required])
- fallbackLng (String [required])
- siteUrl (String [optional])

For example:

```js
options: {
  availableLngs: ['en', 'de'],
  fallbackLng: 'en',
  siteUrl: 'https://www.example.com/',
}
```

## Starters
### gatsby-starter-i18next
[Demo](https://hupe1980.github.io/gatsby-i18n/gatsby-starter-i18next) [Source](/starters/gatsby-starter-i18next)
- i18next integration
- automatic browser-language detection and redirection
- language switcher
- hreflang
- ...

## License
[MIT](LICENSE)
