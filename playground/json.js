// let obj = {
//   name: 'Christian'
// }

// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// let personString = '{"name": "Christian","age": 26}';
// const person = JSON.parse(personString);
// console.log(person);

const fs = require('fs');

const originalNote = {
  title: 'My title',
  body: 'body'
};
const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

const note = JSON.parse(fs.readFileSync('notes.json'));
// Take string and convert to object
console.log(typeof note);
console.log(note.title);