import Fiber from 'fibers'
import Sass from 'sass'
import StylelintWebpackPlugin from 'stylelint-webpack-plugin'
import pkg from './package'

const customSass = {
  implementation: Sass,
  fiber: Fiber
}

const meta = {
  siteName: 'ruedap.com',
  description: "ruedap's portfolio website",
  keywords: 'ruedap portfolio website',
  ogImagePath: '/static/og.png',
  ogImageAlt: 'ruedap.com',
  ogImageWidth: '1200',
  ogImageHeight: '630'
}

export default {
  mode: 'universal',

  server: {
    host: '0.0.0.0',
    port: 3666
  },

  /*
   ** Headers of the page
   */
  head: {
    title: meta.siteName,
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: meta.description },
      {
        hid: 'description',
        name: 'description',
        content: meta.description
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: meta.keywords
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: meta.siteName
      },
      { hid: 'og:image', property: 'og:image', content: meta.ogImagePath },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: meta.ogImageAlt
      },
      {
        hid: 'og:image:width',
        property: 'og:image:width',
        content: meta.ogImageWidth
      },
      {
        hid: 'og:image:height',
        property: 'og:image:height',
        content: meta.ogImageHeight
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: meta.siteName
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: meta.description
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: `@ruedap`
      }
    ],
    link: [
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'manifest', href: '/manifest.json' },
      { rel: 'apple-touch-icon', href: '/icons/48.png' },
      { rel: 'apple-touch-icon', href: '/icons/72.png', sizes: '72x72' },
      { rel: 'apple-touch-icon', href: '/icons/96.png', sizes: '96x96' },
      { rel: 'apple-touch-icon', href: '/icons/144.png', sizes: '144x144' },
      { rel: 'apple-touch-icon', href: '/icons/192.png', sizes: '192x192' },
      {
        rel: 'stylesheet',
        href: '//fonts.googleapis.com/css?family=PT+Serif:400&subset=latin'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/stylesheets/basics.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-scrollto.js'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-39361234-2'
      }
    ],
    'nuxt-svg-loader'
  ],
  styleResources: {
    scss: ['~/assets/stylesheets/abstractions.scss']
  },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    loaders: {
      scss: customSass,
      cssModules: {
        localIdentName: '[name]-[local]-[hash:base64:5]'
      }
    },
    extractCSS: true,
    publicPath: '/assets/',
    postcss: {
      plugins: {
        'postcss-preset-env': {
          autoprefixer: { grid: true }
        }
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        config.plugins.push(
          new StylelintWebpackPlugin({
            files: '**/*.{scss,vue}'
          })
        )
      }
    }
  }
}
