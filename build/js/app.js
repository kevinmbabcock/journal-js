(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Journal(title, body) {
  this.title = title;
  this.body = body;
}

Journal.prototype.numberOfWords = function() {
  var splitString = this.title.split(" ");
  return splitString.length;
};

Journal.prototype.numberOfVowels = function() {
  var splitString = this.body.toLowerCase().split("");
  var counter = 0;
  splitString.forEach(function(letter) {
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
      counter ++;
    }
  });
  return counter;
};

Journal.prototype.numberOfConsonants = function() {
  var vowels = this.numberOfVowels();
  var output = this.body.length - vowels;
  return output;
};



exports.journalModule = Journal;

},{}],2:[function(require,module,exports){
var Journal = require('./../js/journal.js').journalModule;

$(document).ready(function() {
  $('#journalEntry').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Journal (title, body);
    var words = newEntry.numberOfWords();
    var vowels = newEntry.numberOfVowels();
    var consonants = newEntry.numberOfConsonants();
    $('#solution').append("<li>There are " + words + " words in the title</li>");
    $('#solution').append("<li>There are " + vowels + " vowels and " + consonants + " consonants in the body</li>");
  });
});

},{"./../js/journal.js":1}]},{},[2]);
