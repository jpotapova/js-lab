function solution() {
  function giftBoxes(g, c) {
    /*
     * Return the number of gift boxes that can be packaged.
     */
    var l = c.length;
    while (c.indexOf(g) > -1) {
      c = c.split(g).join('');
    }
    return (l - c.length) / g.length;
  }

  return {
    giftBoxes: giftBoxes
  };
}

module.exports = solution;
