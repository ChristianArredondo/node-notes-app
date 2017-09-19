console.log('Starting notes.js');

const fs = require('fs');

const addNote = (title, body) => {
  let notes = [];
  let note = {
    title,
    body
  };

  try {
    let notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (e) {
  
  }

  let duplicates = notes.filter((note) => note.title === title);

  if (!duplicates.length) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }

};

const getAll = () => {
  console.log('Getting all notes...');
};

const readNote = (title) => {
  console.log('Reading note:', title);
};

const removeNote = (title) => {
  console.log('Removing note:', title);
};


module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
}