"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phone_zh = exports.mobile_zh = exports.number = void 0;
exports.number = /^[0-9]*$/; // 是否为数字
exports.mobile_zh = /^[1][3,4,5,7,8,9][0-9]{9}$/; // 是否为手机号-中国
exports.phone_zh = /^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$/; // 验证电话号码--正确格式为：XXXX-XXXXXXX，XXXX-XXXXXXXX，XXX-XXXXXXX，XXX-XXXXXXXX，XXXXXXX，XXXXXXXX
