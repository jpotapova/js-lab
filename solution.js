function solution() {
  function canColor(n, m, A, B) {
    /*
     * Return either "YES" or "NO" denoting whether it is possible or not.
     */
    var result = 'YES';
    var sumA = 0;
    var sumB = 0;
    for (var i = 0; i < n; i++) {
      sumA += A[i];
    }
    for (var j = 0; j < m; j++) {
      sumB += B[j];
    }
    if (sumA !== sumB) {
      result = 'NO';
    }

    //---
    A = A.sort(function(a, b) {
      return a - b;
    });

    var newB = [],
      aCopy = A.slice();
    var rowSum;
    // construct rows
    for (var r = 0; r < m; r++) {
      // row by row
      rowSum = 0;
      for (var i = 0; i < n; i++) {
        // col by col
        if (aCopy[i] > 0) {
          aCopy[i]--;
          rowSum++;
        }
      }
      newB.push(rowSum);
    }

    B = B.sort(function(a, b) {
      return a - b;
    });
    newB = newB.sort(function(a, b) {
      return a - b;
    });
    for (var p = 0; p < m; p++) {
      if (B[p] !== newB[p]) {
        result = 'NO';
      }
    }

    // compare two sorted arrays

    return result;
  }

  return {
    canColor: canColor
  };
}

module.exports = solution;
