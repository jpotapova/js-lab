const stringMap = require('../string-map');
describe('string map', () => {
  it('generates an empty object for an empty string ', () => {
    expect(stringMap('')).toEqual({});
  });
  it('generates an object {"a": 1} for a string "a"', () => {
    expect(stringMap('a')).toEqual({ a: 1 });
  });
  it('generates an object {"a": 1, "b": 1} for a string "ab"', () => {
    expect(stringMap('ab')).toEqual({ a: 1, b: 1 });
  });
});
