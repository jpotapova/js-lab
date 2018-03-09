const solution = require('../solution');
var s = new solution();

describe('Gift boxes', () => {
  it('case 1', () => {
    expect(s.giftBoxes('ab', 'abab')).toBe(2);
  });
  it('case 2', () => {
    expect(s.giftBoxes('ab', 'aabb')).toBe(2);
  });
});
