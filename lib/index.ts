export const number = /^[0-9]*$/ // 是否为数字
export const mobile_zh = /^[1][3,4,5,7,8,9][0-9]{9}$/; // 是否为手机号-中国
export const phone_zh = /^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$/ // 验证电话号码--正确格式为：XXXX-XXXXXXX，XXXX-XXXXXXXX，XXX-XXXXXXX，XXX-XXXXXXXX，XXXXXXX，XXXXXXXX