const easyChange = require('../easy-change');
describe('Is single bill', () => {
  it('20', () => {
    expect(easyChange.isSingleBill(20)).toBe(true);
  });
  it('50', () => {
    expect(easyChange.isSingleBill(50)).toBe(true);
  });
  it('100', () => {
    expect(easyChange.isSingleBill(100)).toBe(true);
  });
  it('200', () => {
    expect(easyChange.isSingleBill(200)).toBe(true);
  });
  it('500', () => {
    expect(easyChange.isSingleBill(500)).toBe(true);
  });
  it('1000', () => {
    expect(easyChange.isSingleBill(1000)).toBe(true);
  });
  it('10', () => {
    expect(easyChange.isSingleBill(10)).toBe(false);
  });
  it('1', () => {
    expect(easyChange.isSingleBill(1)).toBe(false);
  });
});
