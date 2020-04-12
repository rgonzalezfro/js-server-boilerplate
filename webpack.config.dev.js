import path from 'path';
import htmlWebpackPlugin from 'html-webpack-plugin';

export default {
    devtool: 'inline-source-map',
    mode: 'development',

    //applications entry point
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',

    //defines where webpack should create the dev bundle
    //there will not be a physical file, webpack just creates in and serves the bundles from memory
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        noInfo: true,
        stats: 'none'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'src/index.html',
            inject: true
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
                test: /\.css$/, use: ['style-loader', 'css-loader']
            }
        ]
    }
}
