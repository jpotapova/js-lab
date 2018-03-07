const timeInWords = require('../time-in-words');
describe('Time in words returns', () => {
  it("five o' clock for 5:00", () => {
    expect(timeInWords(5, 0)).toBe("five o' clock");
  });
  it("one o' clock for 1:00", () => {
    expect(timeInWords(1, 0)).toBe("one o' clock");
  });
  it("two o' clock for 2:00", () => {
    expect(timeInWords(2, 0)).toBe("two o' clock");
  });
  it("three o' clock for 3:00", () => {
    expect(timeInWords(3, 0)).toBe("three o' clock");
  });
  it("four o' clock for 4:00", () => {
    expect(timeInWords(4, 0)).toBe("four o' clock");
  });
  it("six o' clock for 6:00", () => {
    expect(timeInWords(6, 0)).toBe("six o' clock");
  });
  it("seven o' clock for 7:00", () => {
    expect(timeInWords(7, 0)).toBe("seven o' clock");
  });
  it("eight o' clock for 8:00", () => {
    expect(timeInWords(8, 0)).toBe("eight o' clock");
  });
  it("nine o' clock for 9:00", () => {
    expect(timeInWords(9, 0)).toBe("nine o' clock");
  });
  it("ten o' clock for 10:00", () => {
    expect(timeInWords(10, 0)).toBe("ten o' clock");
  });
  it("eleven o' clock for 11:00", () => {
    expect(timeInWords(11, 0)).toBe("eleven o' clock");
  });
  it("twelve o' clock for 12:00", () => {
    expect(timeInWords(12, 0)).toBe("twelve o' clock");
  });
  it('quarter past five for 5:15', () => {
    expect(timeInWords(5, 15)).toBe('quarter past five');
  });
  it('quarter past six for 6:15', () => {
    expect(timeInWords(6, 15)).toBe('quarter past six');
  });
  it('quarter to seven for 6:45', () => {
    expect(timeInWords(6, 45)).toBe('quarter to seven');
  });
  it('twenty one past two for 2:21', () => {
    expect(timeInWords(2, 21)).toBe('twenty one past two');
  });
  it('twenty nine to eight for 7:31', () => {
    expect(timeInWords(7, 31)).toBe('twenty nine to eight');
  });
  it('one to five for 4:59', () => {
    expect(timeInWords(4, 59)).toBe('one to five');
  });
});
