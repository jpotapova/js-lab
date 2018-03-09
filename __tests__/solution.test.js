const solution = require('../solution');
var s = new solution();

describe('same length', () => {
  it('10 11', () => {
    expect(s.sameLength(10, 11)).toBe(true);
  });
  it('10 1', () => {
    expect(s.sameLength(10, 1)).toBe(false);
  });
});

describe('split by length', () => {
  it('case 1', () => {
    expect(s.splitByLength([1, 10, 13, 23, 31, 32])).toEqual([0, 1]);
  });
});

describe('solution', () => {
  it('example', () => {
    expect(s.uniqueRecycledPairs(6, [10, 1, 13, 31, 23, 32])).toBe(2);
  });
});
