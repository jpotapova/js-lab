function timeInWords(h, m) {
  var result = '';
  var nrToWord = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
  };

  function minsInWords(m) {
    if (m < 21) return nrToWord[m];
    else return 'twenty ' + nrToWord[m % 10];
  }

  if (m === 0) {
    result = nrToWord[h] + " o' clock";
  } else if (m === 15) {
    result = 'quarter past ' + nrToWord[h];
  } else if (m === 45) {
    result = 'quarter to ' + nrToWord[h + 1];
  } else if (m < 30) {
    result = minsInWords(m) + ' past ' + nrToWord[h];
  }
  return result;
}

module.exports = timeInWords;
