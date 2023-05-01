const express = require('express');
const path = require('path');
//const fs = require('fs');
//goes to index.js file in routes
const api = require('./Develop/public/routes');
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/index.html'))
);

//GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/notes.html'))
);

// * = anything else that doesn't exist, will send the index.html file
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/index.html'))
);

app.listen(PORT, () =>
console.log("app listening"))
