const stringMap = require('../string-map');
describe('string map', () => {
  it('generates an empty object for an empty string ', () => {
    expect(stringMap('')).toEqual({});
  });
  it('generates an object {"a": 1} for a string "a"', () => {
    expect(stringMap('a')).toEqual({ a: 1 });
  });
});
