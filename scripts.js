//user interface
$(document).ready(function() {
  $('form#latin').submit(function() {
    event.preventDefault();
    var inputSentence = $('#userInput').val();
    console.log('input: ', inputSentence);
    var translation = translateWord(inputSentence);
    $('p').text(translation);
  });
});

// logic
// Vowel: add "way" to the end.
// TODO: Consonant: move all consonants to end and add "ay".
// TODO: If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
// TODO: For words beginning with "y", treat "y" as a consonant.
// TODO: Handle multi-word input
var vowels = ['a', 'i', 'e', 'o', 'u'];
function translateWord(word) {
  var characterArr = word.toLowerCase().split('');
  if (vowels.includes(characterArr[0])) {
    return characterArr.join('') + 'way';
  }

  //for(var i = 0; i < arr.length; i++) {

  //}
}
