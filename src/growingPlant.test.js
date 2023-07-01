const growingPlant = require('./growingPlant');

describe('growingPlant', () => {
  it('should return exception when given wrong upSpeed input ', () => {
    expect(() => growingPlant(true)).toThrow();
  });
  it('should return exception when given wrong downSpeed input ', () => {
    expect(() => growingPlant(10,'lol')).toThrow();
  });
});
