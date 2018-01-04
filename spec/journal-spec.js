import { Journal } from './../js/journal.js';

describe('Journal', function() {
  let reusableEntry;

  beforeEach(function() {
    reusableEntry = new Journal("this is a title","This is a body");
  })

  it('should test the number of words inside the title', function() {
    expect(reusableEntry.numberOfWords()).toEqual(4)
  });

  it('should test the number of vowels in the body', function() {
    expect(reusableEntry.numberOfVowels()).toEqual(4)
  });

  it('should test the number of vowels in the body', function() {
    expect(reusableEntry.numberOfConsonants()).toEqual(7)
  });
});
