const growingPlant = require('./growingPlant');

describe('growingPlant', () => {
  it('should return exception when given wrong upSpeed input', () => {
    expect(() => growingPlant(true)).toThrow();
  });
  it('should return exception when given wrong downSpeed input', () => {
    expect(() => growingPlant(10,'lol')).toThrow();
  });
  it('should return exception when given wrong desiredHeight input', () => {
    expect(() => growingPlant(10,5,[])).toThrow();
  });
  it('should return 1 when given (10,5,4)', () => {
    expect(growingPlant(10,5,4)).toBe(1);
  });
  it('should return 2 when given (10,9,11)', () => {
    expect(growingPlant(10,9,11)).toBe(2);
  });
  it('should return 3 when given (10,4,22)', () => {
    expect(growingPlant(10,4,22)).toBe(3);
  });
  it('should return 10 when given (100,10,910)', () => {
    expect(growingPlant(100,10,910)).toBe(10);
  });
  it('should return 24 when given (28,8,486)', () => {
    expect(growingPlant(28,8,486)).toBe(24);
  });
});
