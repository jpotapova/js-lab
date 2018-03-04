const arraySum = require('../array-sum');
describe('Array sum', () => {
  it('returns 0 for an empty array', () => {
    expect(arraySum(0, [])).toBe(0);
  });
  it('returns 1 for [1]', () => {
    expect(arraySum(1, [1])).toEqual(1);
  });
  it('returns 6 for [1, 2, 3]', () => {
    expect(arraySum(3, [1, 2, 3])).toEqual(6);
  });
});
