console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')


const argv = yargs.argv;
const command = argv._[0];
console.log(argv);
console.log(command);

if (command === 'add') {
  console.log('Adding new note...');
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  console.log('Reading note...');
  notes.readNote(argv.title);
} else if (command === 'remove') {
  console.log('Removing note...');
  notes.removeNote(argv.title);
} else {
  console.log('Command not found...')
}