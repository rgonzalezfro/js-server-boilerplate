import express from 'express';
import path from 'path';

//*after configuring in config file, set up dev server to serve webpack bundle
import webpack from 'webpack';
import config from '../webpack.config.dev';
import webpackMiddleware from 'webpack-dev-middleware';

/* eslint-disable no-console */

const port = 3000;
const app = express();

const compiler = webpack(config);
app.use(webpackMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
})

app.listen(port, (error) => {
    if (error) {
        console.error(error)
    }
});
