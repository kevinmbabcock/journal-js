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
    var teaser = newEntry.getTeaser();
    $('#solution').append("<li>There are " + words + " words in the title</li>");
    $('#solution').append("<li>There are " + vowels + " vowels and " + consonants + " consonants in the body</li>");
    $('#solution').append("<li>" + "'" + teaser + "'" + "</li>");
  });
});
