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
    expect(s.splitByLength([1, 2, 3, 10, 13, 23, 31, 32])).toEqual([0, 3]);
  });
});

describe('is recycled', () => {
  xit('case 1', () => {
    expect(s.isRecycledInt(1, 1)).toBe(false);
    expect(s.isRecycledInt(11, 11)).toBe(false);
    expect(s.isRecycledInt(111, 111)).toBe(false);
  });
  it('case 2', () => {
    expect(s.isRecycledInt(12, 21)).toBe(true);
    expect(s.isRecycledInt(113, 131)).toBe(true);
    expect(s.isRecycledInt(1234, 3412)).toBe(true);
  });
});

describe('solution', () => {
  it('case1', () => {
    expect(s.uniqueRecycledPairs([2, 3, 10, 1, 13, 31, 23, 32])).toBe(2);
  });
  it('case2', () => {
    expect(s.uniqueRecycledPairs([2345, 3452, 10, 1, 13, 31, 23, 32])).toBe(3);
  });
  it('case3', () => {
    expect(s.uniqueRecycledPairs([23, 32, 23, 32])).toBe(1);
  });
});
