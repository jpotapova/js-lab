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
    var result = '';
    if (m < 21) result = nrToWord[m];
    else result = 'twenty ' + nrToWord[m % 10];
    if (m === 1 || m === 21) result = result + ' minute ';
    else result = result + ' minutes ';
    return result;
  }

  if (m === 0) {
    result = nrToWord[h] + " o' clock";
  } else if (m === 15) {
    result = 'quarter past ' + nrToWord[h];
  } else if (m === 45) {
    result = 'quarter to ' + nrToWord[h + 1];
  } else if (m === 30) {
    result = 'half past ' + nrToWord[h];
  } else if (m < 30) {
    result = minsInWords(m) + 'past ' + nrToWord[h];
  } else if (m > 30) {
    result = minsInWords(60 - m) + 'to ' + nrToWord[h + 1];
  }
  return result;
}

module.exports = timeInWords;
