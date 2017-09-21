console.log('Starting notes.js');

const fs = require('fs');

let fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data.json');
    return notes = JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };

  let duplicates = notes.filter((note) => note.title === title);

  if (!duplicates.length) {
    notes.push(note);
    saveNotes(notes); 
    return note;
  }

};

const getAll = () => {
  console.log('Getting all notes...');
};

const readNote = (title) => {
  console.log('Reading note...');
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note) => note.title == title);
  return filteredNotes[0];
};

const removeNote = (title) => {
  console.log('Removing note...');
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length === filteredNotes.length;
};

const logNote = (note) => {
  debugger;
  console.log(
    `
    Note found:
    ----------
    Title: ${note.title}
    Body: ${note.body}
    ----------
    `
  );
};


module.exports = {
  addNote, 
  getAll,
  logNote,
  readNote,
  removeNote
}