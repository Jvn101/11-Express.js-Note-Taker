const notes = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// GET Route for retrieving all the currently saved notes
notes.get('/', (req, res) => {
  const data = fs.readFile("../db/db.json", "utf-8")
  const readData = res.json(JSON.parse(data));
  return readData;
  });
  
notes.post('/', (req, res) => {
//console.log(req.body);
const { title, text } = req.body;
try {
const newNotes = {
  title,
  text,
  id: uuidv4(),
};

const data = fs.readFile('../db/db.json', "utf-8")
const parsedData = JSON.parse(data);
parsedData.push(newNotes);
// Save new note to the database
fs.writeFile('../db/db.json', JSON.stringify(parsedData, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to '../db/db.json'`)
  );
  res.json("Your note has been added!");
  } catch (error) {
  res.send('Error in posting note');
    }
  });
  
  module.exports = notes








// Destructuring assignment for the items in req.body

//readFromFile('../../db/db.json').then((data) => res.json(JSON.parse(data)));
//const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

  

// const readAndAppend = (req.body, file) => {
//   fs.readFile(file, 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       const parsedData = JSON.parse(data);
//       parsedData.push(req.body);
//       writeToFile(file, parsedData);
//     }

// readAndAppend(newNotes, '../../db/db.json');

// const response = {
//   status: 'success',
//   body: newNotes,
// };

// res.json(response);
// } else {
// res.json('Error in posting note');
// }
// });

