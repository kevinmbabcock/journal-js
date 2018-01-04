export class Journal {
  constructor(title, body) {
  this.title = title;
  this.body = body;
}

  numberOfWords() {
    let splitString = this.title.split(" ");
    return splitString.length;
  };

  numberOfVowels() {
    let splitString = this.body.toLowerCase().split("");
    let counter = 0;
    splitString.forEach(function(letter) {
      if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
        counter ++;
      }
    });
    return counter;
  };

  numberOfConsonants() {
    let vowels = this.numberOfVowels();
    let characters = this.body.replace(/[^a-zA-Z]/g, '');
    // console.log(characters);
    let output = characters.length - vowels;
    return output;
  };

  getTeaser() {
    let firstSentence = this.body.split(".");
    let beginning = firstSentence[0];
    // console.log(beginning);
    let teaser = beginning.split(" ", 8);
    // console.log(teaser);
    return teaser.join(" ");
  }

}
