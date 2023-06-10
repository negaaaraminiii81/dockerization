const gcd = require('./Sofware');


test('gcd of 12 and 2 is ', () => {
    expect(gcd.gcd(12, 2)).toBe(2);
  });


  test('gcd of 17 and 5 is ', () => {
    expect(gcd.gcd(17, 5)).toBe(1);
  });


  test('gcd of 24 and 9 is ', () => {
    expect(gcd.gcd(24, 9)).toBe(3);
  });


test('gcd of 81 and 27 is ', () => {
    expect(gcd.gcd(81, 27)).toBe(27);
  });
