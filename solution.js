function solution() {
  function uniqueRecycledPairs(n, A) {
    /*
	     * Return the number of unique recycled pairs present in the array.
	     */
    var arr = A.sort(function compareNumbers(a, b) {
      return a - b;
    });
    var lengthChanges = splitByLength(arr);
    var lengthChangesCount = lengthChanges.length - 1;
    for (var l = 0; l < lengthChangesCount; l++) {
      let iFrom = lengthChanges[l]; // first index to include
      let iTo = lengthChanges[l + 1] - 1; // last index to include
      // compare all the pairs within this part of array
      compareInts(iFrom, iTo, arr);
    }
    {
      let iFrom = lengthChanges[lengthChangesCount]; // first index to include
      let iTo = n - 1; // last index to include
      compareInts(iFrom, iTo, arr);
      // compare all the pairs within this part of array
    }
    return 2;
  }

  function compareInts(iFrom, iTo, arr) {
    for (var i = iFrom; i < iTo; i++) {
      for (var j = i + 1; j <= iTo; j++) {
        isRecycledInt(arr[i], arr[j]);
      }
    }
  }

  function sameLength(a, b) {
    return a.toString().length === b.toString().length;
  }

  function splitByLength(arr) {
    var l = arr.length;
    var lengthChanges = [0];
    for (var i = 0; i < l - 1; i++) {
      if (!sameLength(arr[i], arr[i + 1])) {
        lengthChanges.push(i + 1);
      }
    }
    return lengthChanges;
  }

  function isRecycledInt(int1, int2) {
    console.log('is recycled int? ', int1, int2);
  }

  return {
    uniqueRecycledPairs: uniqueRecycledPairs,
    sameLength: sameLength,
    splitByLength: splitByLength
  };
}

module.exports = solution;
