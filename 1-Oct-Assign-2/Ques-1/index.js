// Import the boxen module
const boxen = require('boxen');

// Define the message and title
const message = 'I am using my first external module!';
const title = 'Hurray!!!';

// 1. Classic (default style)
console.log(boxen(message, { 
    title,
    color: 'white',
    borderStyle: 'classic',
    backgroundColor: 'green',
    padding: 1,
    
 }));

// 2. SingleDouble border style
console.log(boxen(message, {
  title,
  borderStyle: 'singleDouble',
  backgroundColor: 'blue',
  padding: 1,
  color: 'white',
}));

// 3. Round border style
console.log(boxen(message, {
  title,
  borderStyle: 'round',
  backgroundColor: 'red',
    padding: 1,
    color: 'white',
}));
