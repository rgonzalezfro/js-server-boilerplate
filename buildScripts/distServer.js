import express from 'express';
import path from 'path';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
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
