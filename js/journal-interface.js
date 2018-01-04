import { Journal } from './../js/journal.js';

$(document).ready(function() {
  $('#journalEntry').submit(function(event) {
    event.preventDefault();
    let title = $('#title').val();
    let body = $('#body').val();
    let newEntry = new Journal (title, body);
    let words = newEntry.numberOfWords();
    let vowels = newEntry.numberOfVowels();
    let consonants = newEntry.numberOfConsonants();
    let teaser = newEntry.getTeaser();
    $('#solution').append("<li>There are " + words + " words in the title</li>");
    $('#solution').append("<li>There are " + vowels + " vowels and " + consonants + " consonants in the body</li>");
    $('#solution').append("<li>" + "'" + teaser + "'" + "</li>");
  });
});
