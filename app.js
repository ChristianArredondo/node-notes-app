console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js')

// console.log(_.isString(true));
// console.log(_.isString('true'));
const filteredArray = _.uniq(['Christian', 1, 'Christian', 1, 2, 3, 4]);
console.log(filteredArray);

// let user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${ user.username }! You are ${ notes.age }.`, function (err) {
//   if (err) {
//     console.log('Unable to write file.');
//   }
// });
