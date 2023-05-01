const notes = require('express').Router();
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

// GET Route for retrieving all the tips0
notes.get('/', (req, res) => {
    readFromFile('../../db/db.json').then((data) => res.json(JSON.parse(data)));
  });
  
notes.post('/', (req, res) => {
// Destructuring assignment for the items in req.body
console.log(req.body);
const { title, text } = req.body;

if (title && text) {
const newNotes = {
  title,
  text,
  id: uuidv4(),
};

readAndAppend(newNotes, '../../db/db.json');

const response = {
  status: 'success',
  body: newNotes,
};

res.json(response);
} else {
res.json('Error in posting note');
}
});

module.exports = notes