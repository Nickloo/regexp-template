'use strict';
const expect = require('chai').expect;
const { number, idCard_zh, number_n } = require('../dist/index')

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

describe('regexp-template number_n test', () => {
  it('should return true', () => {
    const result = number_n(3).test("123")
    expect(result).to.equal(true);
  });
});

describe('regexp-template number_n test', () => {
  it('should return false', () => {
    const result = number_n(3).test("1112")
    expect(result).to.equal(false);
  });
});