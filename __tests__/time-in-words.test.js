const timeInWords = require('../time-in-words');
describe('Time in words', () => {
  it('returns 0', () => {
    expect(timeInWords(0, 0)).toBe(0);
  });
});
