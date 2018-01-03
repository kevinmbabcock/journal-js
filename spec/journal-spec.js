var Journal = require('./../js/journal.js').journalModule;

describe('Journal', function() {

  it('should test the number of words inside the title', function() {
    var newEntry = new Journal("this is a title","This is a body")
    expect(newEntry.numberOfWords()).toEqual(4)
  });

  it('should test the number of vowels in the body', function() {
    var newEntry = new Journal("this is a title","This is a body")
    expect(newEntry.numberOfVowels()).toEqual(4)
  });

  it('should test the number of vowels in the body', function() {
    var newEntry = new Journal("this is a title","This is a body")
    expect(newEntry.numberOfConsonants()).toEqual(7)
  });
});
