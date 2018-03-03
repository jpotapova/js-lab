const stringMap = require('../string-map');
describe('string map', () => {
  it('generates empty object for an empty string ', () => {
    expect(stringMap('')).toEqual({});
  });
});
