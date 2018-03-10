const solution = require('../solution');
var s = new solution();

describe('Can canColor', () => {
  it('case 1', () => {
    expect(s.canColor(3, 3, [2, 1, 2], [2, 1, 2])).toBe('YES');
  });
  it('case 2', () => {
    expect(s.canColor(3, 3, [2, 1, 2], [2, 2, 2])).toBe('NO');
  });
});
