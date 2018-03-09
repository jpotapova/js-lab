const solution = require('../solution');
var s = new solution();

describe('Gift boxes', () => {
  it('case 1', () => {
    expect(s.giftBoxes('ab', 'abab')).toBe(2);
  });
});
