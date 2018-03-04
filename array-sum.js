function arraySum(n, arr) {
  var sum = 0;
  for (var i = 0; i < n; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

module.exports = arraySum;
