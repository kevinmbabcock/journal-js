(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Journal = exports.Journal = function () {
  function Journal(title, body) {
    _classCallCheck(this, Journal);

    this.title = title;
    this.body = body;
  }

  _createClass(Journal, [{
    key: "numberOfWords",
    value: function numberOfWords() {
      var splitString = this.title.split(" ");
      return splitString.length;
    }
  }, {
    key: "numberOfVowels",
    value: function numberOfVowels() {
      var splitString = this.body.toLowerCase().split("");
      var counter = 0;
      splitString.forEach(function (letter) {
        if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
          counter++;
        }
      });
      return counter;
    }
  }, {
    key: "numberOfConsonants",
    value: function numberOfConsonants() {
      var vowels = this.numberOfVowels();
      var characters = this.body.replace(/[^a-zA-Z]/g, '');
      // console.log(characters);
      var output = characters.length - vowels;
      return output;
    }
  }, {
    key: "getTeaser",
    value: function getTeaser() {
      var firstSentence = this.body.split(".");
      var beginning = firstSentence[0];
      // console.log(beginning);
      var teaser = beginning.split(" ", 8);
      // console.log(teaser);
      return teaser.join(" ");
    }
  }]);

  return Journal;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _journal = require('./../js/journal.js');

$(document).ready(function () {
  $('#journalEntry').submit(function (event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new _journal.Journal(title, body);
    var words = newEntry.numberOfWords();
    var vowels = newEntry.numberOfVowels();
    var consonants = newEntry.numberOfConsonants();
    var teaser = newEntry.getTeaser();
    $('#solution').append("<li>There are " + words + " words in the title</li>");
    $('#solution').append("<li>There are " + vowels + " vowels and " + consonants + " consonants in the body</li>");
    $('#solution').append("<li>" + "'" + teaser + "'" + "</li>");
  });
});

},{"./../js/journal.js":1}]},{},[2]);
