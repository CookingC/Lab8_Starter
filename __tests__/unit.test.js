// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');
test('242-343-9068 is phone number', () => {
  expect(functions.isPhoneNumber('242-343-9068')).toBe(true);
});
test('225-343-9068 is phone number', () => {
  expect(functions.isPhoneNumber('225-343-9068')).toBe(true);
});
test('42 is not phone number', () => {
  expect(functions.isPhoneNumber('42')).toBe(false);
});
test('41444-21 is not phone number', () => {
  expect(functions.isPhoneNumber('41444-21')).toBe(false);
});
test('11/12/2021 is Date', () => {
  expect(functions.isDate('11/12/2021')).toBe(true);
});
test('11/1/2021 is Date', () => {
  expect(functions.isDate('11/1/2021')).toBe(true);
});
test('111/12/2021 is not Date', () => {
  expect(functions.isDate('111/12/2021')).toBe(false);
});
test('1111/12/2021 is not Date', () => {
  expect(functions.isDate('1111/12/2021')).toBe(false);
});

test('abcde@gmail.com is email address', () => {
    expect(functions.isEmail('abcde@gmail.com')).toBe(true);
});
test('231213123@qq.com is email address', () => {
    expect(functions.isEmail('231213123@qq.com')).toBe(true);
});
test('231213123.com@ is not email address', () => {
    expect(functions.isEmail('231213123.com@')).toBe(false);
});
test('77s77d@123.cn is not email address', () => {
    expect(functions.isEmail('77s77d@123.cn')).toBe(false);
});

test('STATabc is StrongPassword', () => {
    expect(functions.isStrongPassword('STATabc')).toBe(true);
});
test('cmoSadddA is StrongPassword', () => {
    expect(functions.isStrongPassword('cmoSadddA')).toBe(true);
});
test('!abc is not StrongPassword', () => {
    expect(functions.isStrongPassword('!abc')).toBe(false);
});
test('1ads is not StrongPassword', () => {
    expect(functions.isStrongPassword('1ads')).toBe(false);
});
// TODO - Part 2
test('#edb4a2 is HexColor', () => {
    expect(functions.isHexColor('#edb4a2')).toBe(true);
});
test('#90b7af is HexColor', () => {
    expect(functions.isHexColor('#90b7af')).toBe(true);
});
test('!#90b7af is not HexColor', () => {
    expect(functions.isHexColor('!#90b7af')).toBe(false);
});
test('9#90b7af is not HexColor', () => {
    expect(functions.isHexColor('1ads')).toBe(false);
});
