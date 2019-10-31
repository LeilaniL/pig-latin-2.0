//user interface
$(document).ready(function() {
  $('form#latin').submit(function() {
    event.preventDefault();
    var inputSentence = $('#userInput').val();
    console.log('input: ', inputSentence);
    var translation = translateWord(inputSentence);
    $('p').text(translation);
    $('form#latin')[0].reset();
  });
});

// logic
// Vowel: add "way" to the end.
// Consonant: move all consonants to end and add "ay".
// TODO: If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
// TODO: For words beginning with "y", treat "y" as a consonant.
// TODO: Handle multi-word input
var vowels = ['a', 'i', 'e', 'o', 'u'];
function translateWord(word) {
  var characterArr = word.toLowerCase().split('');
  if (vowels.includes(characterArr[0])) {
    return characterArr.join('') + 'way';
  } else if (characterArr[0] == 'q' && characterArr[1] == 'u') {
    console.log('I have a Q and a U!');
  } else {
    var consonants = [];
    for (var i = 0; i < characterArr.length; i++) {
      if (!vowels.includes(characterArr[i])) {
        consonants.push(characterArr[i]);
      } else {
        characterArr = characterArr.splice(i);
        return characterArr.join('') + consonants.join('') + 'ay';
      }
    }
  }
}
