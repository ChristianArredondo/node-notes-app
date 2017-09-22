const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
}
const bodyOptions = {
  describe: 'Note content',
  demand: true,
  alias: 'b'
}

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions,
  })
  .command('remove', 'Remove a note', {
    title: titleOptions,
  })
  .help()
  .argv;
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
  const allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`)
  allNotes.forEach((note) => notes.logNote(note));
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