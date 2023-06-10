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

test('gcd of 100 and 20 is ', () => {
  expect(gcd.gcd(100, 20)).toBe(20);
});

test('gcd of 21 and 13 is ', () => {
  expect(gcd.gcd(21, 13)).toBe(1);
});

