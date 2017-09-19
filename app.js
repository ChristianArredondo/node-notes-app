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
    console.log(`
    Note addded
    -----------
    Title: ${note.title}
    Body: ${note.body}
    `)
  } else {
    console.log('Note title is already in use.')
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  console.log('Reading note...');
  notes.readNote(argv.title);
} else if (command === 'remove') {
  const noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? 'Note not found' : 'Note was removed';
  console.log(message);
} else {
  console.log('Command not found...')
}