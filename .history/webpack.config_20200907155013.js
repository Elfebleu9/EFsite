var Encore = require('@symfony/webpack-encore');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addEntry('app', './assets/js/app.js')
    .addEntry('app2', './assets/js/app2.js')
    //.addEntry('page2', './assets/js/page2.js')

    // Alias
    // .addAliases({
    //     'App': `${__dirname}/assets/js`,
    //     'Style': `${__dirname}/assets/scss`,
    //     'Images': `${__dirname}/assets/image`,
    //     'Sons': `${__dirname}/assets/sons`,
    // })

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // enables @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })

    // enables Sass/SCSS support
    .enableSassLoader()

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    //.enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()

    // uncomment if you use API Platform Admin (composer req api-admin)
    //.enableReactPreset()
    //.addEntry('admin', './assets/js/admin.js')

    .copyFiles([{
        from: './assets/image',
        to: '[path][name].[hash:8].[ext]',
        context: './assets'
    },
    {
        from: './assets/sons',
        to: '[path][name].[hash:8].[ext]',
        context: './assets'
    }
    ])
    
;
const path = require('path')

module.exports = {
    entry: './asserts/js/app.js',
    output:{
        path: path.resolve('./dist'),
        filename: 'ef_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader'],
                options: {
                    presets: ['@babel/preset-env'],
                    // plugins: ['@babel/plugin-proposal-object-rest-spread']
                }
            // loader: 'file-loader',
                // options: {
                //     name: '[path][name].[ext]',
                //     outputPath: 'sons',
                //     publicPath: 'assets',
            },
            {
                test: /\.mp3$/,
                use:['file-loader'],
                options: {
                    name: '[path][name].[ext]',
                    outputPath: 'sons',
                    publicPath: 'assets',

                }
            },
            {
                test: /\.mp3$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            mimetype: 'sons/mp3',
                        }
                    }    
                ],
            },
        ]
    },
};

module.exports = Encore.getWebpackConfig();
