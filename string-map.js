function stringMap(s) {
  var result = {};
  var l = s.length;
  for (var i = 0; i < l; i++) {
    result[s[i]] = 1;
  }
  return result;
}

module.exports = stringMap;
