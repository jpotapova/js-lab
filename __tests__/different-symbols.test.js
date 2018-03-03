const differentSymbols = require('../different-symbols');
describe('Different symbols', () => {
  it('generates an empty string for an empty string ', () => {
    expect(differentSymbols('')).toEqual('');
  });
  it('generates "a" for a string "a"', () => {
    expect(differentSymbols('a')).toEqual('a');
  });
  it('generates "ab" for a string "ab"', () => {
    expect(differentSymbols('ab')).toEqual('ab');
  });
  it('generates "abc" for a string "abc"', () => {
    expect(differentSymbols('abc')).toEqual('abc');
  });
  it('generates "abc" for a string "abaca"', () => {
    expect(differentSymbols('abaca')).toEqual('abc');
  });
});
