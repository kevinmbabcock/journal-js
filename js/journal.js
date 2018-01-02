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

Journal.prototype.getTeaser = function() {
  var firstSentence = this.body.split(".");
  var beginning = firstSentence[0];
  // console.log(beginning);
  var teaser = beginning.split(" ", 8);
  // console.log(teaser);
  return teaser.join(" ");
}



exports.journalModule = Journal;
