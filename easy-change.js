var easyChange = {
  template: function() {
    return 0;
  },
  isSingleBill: function(amount) {
    var result = false;
    var singleBills = [20, 50, 100, 200, 500, 1000];
    for (var i = 0; i < 6; i++) {
      if (amount % singleBills[i] === 0) {
        result = true;
      }
    }
    return result;
  },
  howMuchToAsk: function(c, p) {
    /*
     * Return the amount the cashier should ask the customer or -1 if this exceeds 9.
     */
    var changeToGive = p - c;
    if (this.isSingleBill(changeToGive)) {
      return 0;
    } else {
    }
  }
};

module.exports = easyChange;
