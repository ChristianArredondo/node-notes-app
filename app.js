console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')


const argv = yargs.argv;
const command = argv._[0];

if (command === 'add') {
  console.log('Adding new note...');
  const note = notes.addNote(argv.title, argv.body);
  if (note) {
    notes.logNote(note);
  } else {
    console.log('Note title is already in use.')
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  const noteRead = notes.readNote(argv.title);
  if (noteRead) {
    notes.logNote(noteRead);
  } else {
      console.log('Note not found.');
    }
} else if (command === 'remove') {
  const noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? 'Note not found.' : 'Note was removed.';
  console.log(message);
} else {
  console.log('Command not found...')
}