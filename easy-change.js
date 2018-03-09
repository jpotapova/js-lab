var easyChange = {
  template: function() {
    return 0;
  },
  isSingleBill: function(amount) {
    var singleBills = [20, 50, 100, 200, 500, 1000];
    return singleBills.indexOf(amount) > -1;
  },
  howMuchToAsk: function(c, p) {
    /*
     * Return the amount the cashier should ask the customer or -1 if this exceeds 9.
     */
    var changeToGive = p - c;
  }
};

module.exports = easyChange;
