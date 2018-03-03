function differentSymbols(s) {
  var result = '';
  var l = s.length;
  var letter;
  for (var i = 0; i < l; i++) {
    letter = s[i];
    if (!result.includes(letter)) {
      result = result + letter;
    }
  }
  return result;
}

module.exports = differentSymbols;
