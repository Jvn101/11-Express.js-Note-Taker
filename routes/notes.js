const notes = require("express").Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const {readAndAppend, writeToFile, readFromFile} = require('./fsUtils');

//GET Route for retrieving all the currently saved notes
notes.get('/', (req, res) => {

  fs.readFile("./db/db.json", "utf-8", (err, file) => {
    if(err){
      console.error(err);
    }
    else {
      const parsedData = res.json(JSON.parse(file));
      console.log(parsedData);
    }
  });  
});

// DELETE Route for a specific notes
notes.delete('/:id', (req, res) => {
  const noteId = req.params.id;
  readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      // Make a new array of all the notes except the one with the ID provided in the URL
      const result = json.filter((note) => note.id !== noteId);

      // Save that array to the filesystem
      writeToFile('./db/db.json', result);

      // Respond to the DELETE request
      res.json(`Item has been deleted`);
    });
});

// POST Route for submitting notes
notes.post('/', (req, res) => {

console.log(req.body);
const { title, text } = req.body;

if (req.body) {
const newNotes = {
  title,
  text,
  id: uuidv4(),
}

  readAndAppend(newNotes, "./db/db.json");
    res.json("Note added");
  } else {
    res.error("Error in adding note");
  }
});
  
  module.exports = notes



