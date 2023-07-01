const growingPlant = require('./growingPlant');

describe('growingPlant', () => {
  it('should return exception when given wrong upSpeed input ', () => {
    expect(() => growingPlant()).toThrow();
  });
});
