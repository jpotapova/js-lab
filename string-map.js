function stringMap(s) {
  var result = {};
  var l = s.length;
  var letter;
  for (var i = 0; i < l; i++) {
    letter = s[i];
    if (result[letter] != undefined) {
      result[letter] = result[letter] + 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
}

module.exports = stringMap;
