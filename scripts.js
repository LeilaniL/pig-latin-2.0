//user interface
$(document).ready(function() {
  $('form#latin').submit(function() {
    event.preventDefault();
    $('#results').hide();
    var inputSentence = $('#userInput').val();
    console.log('input: ', inputSentence);
    var translation = getTranslation(inputSentence);
    $('h3').text(translation);
    $('#results').fadeIn(2000);
    $('form#latin')[0].reset();
  });
});

// logic
// Vowel: add "way" to the end.
// Consonant: move all consonants to end and add "ay".
// If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
// For words beginning with "y", treat "y" as a consonant.
// TODO: deal with special characters, numbers
// TODO: maintain capitalization
// TODO: handle "y" as vowel if not first letter??
var vowels = ['a', 'i', 'e', 'o', 'u'];

function getTranslation(sentence) {
  var result = [];
  var wordArray = sentence.split(' ');
  wordArray.forEach(function(input) {
    result.push(translateWord(input));
    console.log('result: ', result);
  });
  if (!result.join('')) {
    return 'Nope! Try again Grant!';
  }
  return result.join(' ');
}

function translateWord(word) {
  var characterArr = word.toLowerCase().split('');
  if (vowels.includes(characterArr[0])) {
    return characterArr.join('') + 'way';
  } else {
    var consonants = [];
    for (var i = 0; i < characterArr.length; i++) {
      console.log('I am Loop: ', i);
      if (characterArr[i] === 'q' && characterArr[i + 1] === 'u') {
        consonants.push(characterArr[i] + characterArr[i + 1]);
        //remove 'qu' from array to avoid checking it again in next loop
        characterArr[i] = null;
        characterArr[i + 1] = null;
      }
      if (!vowels.includes(characterArr[i])) {
        console.log('Consonant! ', characterArr[i]);
        consonants.push(characterArr[i]);
      } else {
        characterArr = characterArr.splice(i);
        return characterArr.join('') + consonants.join('') + 'ay';
      }
    }
  }
}
