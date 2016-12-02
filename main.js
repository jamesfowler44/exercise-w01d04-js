// task 1
// Write a function called knighted that takes a name and returns it with "Sir" in front
// when you use it - it should look like this

function knighted(yourName) {
  return "Sir " + yourName;
}

var name = knighted('Elton');
// console.log(name);

// task 2
// Write a function called doubleIt that takes a number, doubles it and returns the new number

var doubleIt = function(n) {
   return n * 2;
}

var answer = doubleIt(2);

console.log(answer);

// task 3
// Write a function called makeUser that takes a name and returns a new object

var makeUser = function(userName) {
   var userObject = {name: userName};
   return userObject;
}

var user = makeUser('Dave');
console.log(user);

// task 4
// Write a function called makeLink that takes a title and a url and returns a string of html
var makeLink = function(title, url) {
  return '<a href=' + url + '>' + title + '</a>';
};
var aTag = makeLink('google', 'http://google.com');
console.log(aTag);


// var aTag = makeLink('google', 'http://www.google.com');
// console.log(aTag) => '<a href="http://www.google.com">google</a>'

// task 5
// Write a function called second that takes an array and returns the 2nd element in it

// var answer = second(['a', 'b', 'c']);
// console.log(answer) => 'b'
var second = function(array) {
    return array[1];
};
var answer = second(['a', 'b', 'c']);
console.log(answer);
// task 6
// Write a function called toSentence that takes an array and returns a string
// where the items are joined by commas (except the last one which is joined with 'and')
// where the first letter is capitalized and the string ends in an exclamation point.
var toSentence = function(array) {
    var string = array[0] + ', ' + array[1] + ', ' + 'and ' + array[2] + '!';
    return string.charAt(0).toUpperCase() + string.slice(1);
};
var sentence = toSentence(['lions', 'tigers', 'bears']);
console.log(sentence);

// task 7
// Write a function called random number that returns a random number between 0 and x
// Hint: Take a look at MDN's docs on Math.random
var randomNumber = function(max) {
  min = Math.floor(0);
  max = Math.ceil(5);
  return Math.floor(Math.random() * (max - min)) + min;
};
var answer = randomNumber(0, 5);
console.log(answer);

// task 8
// Write a function called magicEightball that returns a random answer from the following list
// "yes", "no", "maybe", "ask again later", "most likely"
var magicEightball = function() {
  array = ["yes", "no", "maybe", "ask again later", "most likely"];
  min = Math.floor(0);
  max = Math.ceil(5);
  var rand = array[Math.floor(Math.random() * array.length)];
  return rand;
};
var answer = magicEightball();
console.log(answer);
// task 9
// write a function called pluck that takes an array of objects and a key as arguments
// and returns a list of those properties
// var students = [{name: 'Harry', age: 12}, {name: 'Hermione', age: 13}, {name: 'Draco', age: 13}];
// var names = pluck(students, 'name');
// console.log(names) // ['Harry', 'Hermione', 'Draco']
































