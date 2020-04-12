import path from 'path';
import htmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserJSPlugin  from 'terser-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

export default {
    devtool: 'source-map',
    mode: 'production',

    //applications entry point
    entry: {
        main: path.resolve(__dirname, 'src/index')
    },
    target: 'web',

    //defines where webpack should create the dev bundle
    //there will not be a physical file, webpack just creates in and serves the bundles from memory
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[contenthash].js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        noInfo: true,
        stats: 'none'
    },

    optimization: {
        minimize: true,
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
        splitChunks: {
            chunks: 'all',
            minSize: 3000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 6,
            maxInitialRequests: 4,
            automaticNameDelimiter: '~',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },

    plugins: [
        new htmlWebpackPlugin({
            template: 'src/index.html',
            inject: true,
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
                minifyCSS: true,
                minifyJS: true,
                minifyURLs: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],

    //tells webpack the file types(loaders) that we want it to handle
    //webpack can handle many more types of loaders than this
    module: {
        rules: [
            {
                test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']
            },
            {
                test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    }
}
