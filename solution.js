function solution() {
  function giftBoxes(g, c) {
    /*
     * Return the number of gift boxes that can be packaged.
     */
    var count = 0;
    while (c.indexOf(g) > -1) {
      c = c.replace(g, '');
      count++;
    }
    return count;
  }

  return {
    giftBoxes: giftBoxes
  };
}

module.exports = solution;
