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

//mock database
app.get('/users', function(req, res) {
    res.json([
      {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bobsmith@gmail.com"},
      {"id": 2, "firstName": "Brenda", "lastName": "Smyth", "email": "bsmyth@gmail.com"},
      {"id": 2, "firstName": "Billy", "lastName": "Smath", "email": "williamsmath@gmail.com"}
    ])
  })

app.listen(port, (error) => {
    if (error) {
        console.error(error)
    }
});
