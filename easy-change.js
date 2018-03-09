var easyChange = {
  template: function() {
    return 0;
  },
  isSingleBill: function(amount) {
    var result = false;
    var singleBills = [20, 50, 100, 200, 500, 1000];
    for (var i = 0; i < 6; i++) {
      if (amount === singleBills[i]) {
        result = true;
      }
    }
    return result;
  },
  howMuchToAsk: function(c, p) {
    /*
     * Return the amount the cashier should ask the customer or -1 if this exceeds 9.
     */
    var result = -1;
    var changeToGive = p - c;
    if (this.isSingleBill(changeToGive)) {
      result = 0;
    } else {
      for (var i = 1; i < 10; i++) {
        if (this.isSingleBill(changeToGive + i)) {
          result = i;
        }
      }
    }
    return result;
  }
};

module.exports = easyChange;
