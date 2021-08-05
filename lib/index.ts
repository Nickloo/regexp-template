export const number: RegExp = /^[0-9]*$/ // 是否为数字
export const mobile_zh: RegExp = /^[1][3,4,5,7,8,9][0-9]{9}$/; // 是否为手机号-中国
export const phone_zh: RegExp = /^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$/; // 验证电话号码--正确格式为：XXXX-XXXXXXX，XXXX-XXXXXXXX，XXX-XXXXXXX，XXX-XXXXXXXX，XXXXXXX，XXXXXXXX
export const idCard_zh: RegExp = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; // 是否为中国身份证号码
// 是否为n位数字
export const number_n = (n: number) => {
  return new RegExp(`^\\d{${ n }}$`)
}