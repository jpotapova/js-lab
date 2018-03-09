function solution() {
  function uniqueRecycledPairs(n, A) {
    /*
	     * Return the number of unique recycled pairs present in the array.
	     */
    var count = 0;
    var arr = A.sort(function compareNumbers(a, b) {
      return a - b;
    });
    var lengthChanges = splitByLength(arr);
    var lengthChangesCount = lengthChanges.length - 1;
    for (var l = 0; l < lengthChangesCount; l++) {
      let iFrom = lengthChanges[l]; // first index to include
      let iTo = lengthChanges[l + 1] - 1; // last index to include
      // compare all the pairs within this part of array
      count = count + compareInts(iFrom, iTo, arr);
    }
    {
      let iFrom = lengthChanges[lengthChangesCount]; // first index to include
      let iTo = n - 1; // last index to include
      count = count + compareInts(iFrom, iTo, arr);
      // compare all the pairs within this part of array
    }
    return count;
  }

  function compareInts(iFrom, iTo, arr) {
    var count = 0;
    for (var i = iFrom; i < iTo; i++) {
      for (var j = i + 1; j <= iTo; j++) {
        if (isRecycledInt(arr[i], arr[j])) {
          count++;
        }
      }
    }
    return count;
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
    if (int1 === int2) return false;
    var int1s = int1.toString();
    var int2s = int2.toString();
    var l = int1s.length;
    var isPair = false;
    for (var i = 1; i < l; i++) {
      let s = int1s.substr(i) + int1s.substr(0, i);
      if (s === int2s) {
        isPair = true;
      }
    }
    return isPair;
  }

  return {
    uniqueRecycledPairs: uniqueRecycledPairs,
    sameLength: sameLength,
    splitByLength: splitByLength,
    isRecycledInt: isRecycledInt
  };
}

module.exports = solution;
