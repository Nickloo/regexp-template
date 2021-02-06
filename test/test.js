'use strict';
const expect = require('chai').expect;
const { number, idCard_zh } = require('../dist/index')

describe('regexp-template number test', () => {
  it('should return true', () => {
    const result = number.test(123)
    expect(result).to.equal(true);
  });
});

describe('regexp-template number test', () => {
  it('should return true', () => {
    const result = number.test("123")
    expect(result).to.equal(true);
  });
});

describe('regexp-template number test', () => {
  it('should return false', () => {
    const result = number.test("12ww23")
    expect(result).to.equal(false);
  });
});

describe('regexp-template idCard_zh test', () => {
  it('should return true', () => {
    const result = idCard_zh.test("130224199403136212")
    expect(result).to.equal(true);
  });
});

describe('regexp-template idCard_zh test', () => {
  it('should return false', () => {
    const result = idCard_zh.test("1302241994031362121")
    expect(result).to.equal(false);
  });
});