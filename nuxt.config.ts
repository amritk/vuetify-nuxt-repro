import Sass from 'sass'
import dotenv from 'dotenv'
import vuetifyLoader from './src/plugins/vuetify-loader'
dotenv.config()

const config = {
    mode: 'universal',
    debug: !(process.env.NODE_ENV === 'production'),

    // Loading bar color
    loading: {
        color: '#fff'
    },

    // Global css
    css: [{ src: '~/assets/style/vuetify.styl', lang: 'styl', ssr:false }],

    // Change src directory
    srcDir: 'src/',
    // Plugins
    plugins: [
        { src: '@/plugins/vuetify' }
    ],

    // Nuxt.js modules
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/dotenv',
        ['cookie-universal-nuxt', { alias: 'nuxtCookies' }]
    ],

    // Babel
    babel: {
        presets: ['@babel/preset-env'],
        plugins: [
            '@babel/plugin-transform-modules-commonjs',
            'dynamic-import-node',
            '@babel/plugin-syntax-dynamic-import',
            [
                'transform-runtime',
                {
                    polyfill: false
                }
            ]
        ]
    },

    // Build Config
    build: {
        filenames: {
            app: ({ isDev }) => isDev ? '[name].js' : '[name]-[hash].js',
            chunk: ({ isDev }) => isDev ? '[name].js' : '[name]-[hash].js'
        },

        // Extend webpack config
        extend: (config, ctx) => {

            config.devtool = ctx.isClient ? 'eval-source-map' : 'inline-source-map'
        },

        loaders: {
            sass: {
                implementation: Sass
            }
        },

        // Vuetify Loader - To auto load your components
        transpile: [/^vuetify/],
        plugins: [ vuetifyLoader]
    }
}

export default config
