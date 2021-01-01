// 账号
const codeReg = /^(?![0-9]*$)(?![a-zA-Z]*$)[a-zA-Z0-9]{6,20}$/
// 电话
const phoneReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
// 必须为数字
const numberReg = /^\d+$|^\d+[.]?\d+$/
// 密码
const passwordReg = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$)([^\u4e00-\u9fa5\s]){6,20}$/
// 联系人
const contactsReg = /^[\u0391-\uFFE5A-Za-z]+$/
const regId = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
const emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
const FormValidate = (function () {
    function FormValidate() { }
    // From表单验证规则  可用于公用的校验部分
    FormValidate.Form = function () {
        return {
            // 账号的验证规则
            validateCode(rule: any, value: any, callback: Function) {
                if (!value) {
                    return callback(new Error('请输入账号'))
                }
                if (!codeReg.test(value)) {
                    callback(new Error('账号必须为6-20位字母和数字组合'))
                } else {
                    callback()
                }
            },
            // 只能数字的验证
            validateNumber(rule: any, value: any, callback: Function) {
                if (value !== '') {
                    if (!numberReg.test(value)) {
                        callback(new Error('必须为数字'))
                    } else {
                        callback()
                    }
                } else {
                    callback()
                }
            },
            // 密码的验证
            validatePsdReg(rule: any, value: any, callback: Function) {
                if (!value) {
                    return callback(new Error('请输入密码'))
                }
                if (!passwordReg.test(value)) {
                    callback(new Error('请输入6-20位英文字母、数字或者符号（除空格），且字母、数字和标点符号至少包含两种'))
                } else {
                    callback()
                }
            },
            // 联系人
            validateContacts(rule: any, value: any, callback: Function) {
                if (!value) {
                    return callback(new Error('请输入联系人'))
                }
                if (!contactsReg.test(value)) {
                    callback(new Error('联系人不可输入特殊字符'))
                } else {
                    callback()
                }
            },
            // 邮箱的验证规则
            validateEmail(rule: any, value: any, callback: Function) {
                if (value !== '') {
                    if (!emailReg.test(value)) {
                        callback(new Error('邮箱格式不正确'))
                    } else {
                        callback()
                    }
                } else {
                    callback()
                }
            },
            // 电话号码的验证
            validatePhone(rule: any, value: any, callback: Function) {
                if (!value) {
                    return callback(new Error('请输入手机号码'))
                }
                if (!phoneReg.test(value)) {
                    callback(new Error('手机格式不正确'))
                } else {
                    callback()
                }
            },
            // 身份证的验证规则
            ID(rule: any, value: any, callback: Function) {
                if (!value) {
                    return callback(new Error('身份证不能为空'))
                }
                if (!regId.test(value)) {
                    callback(new Error('请输入正确的二代身份证号码'))
                } else {
                    callback()
                }
            }
        }
    }
    return FormValidate
}())
exports.FormValidate = FormValidate

// 自定义校验 使用:validator: rules.FormValidate.Form().validateNumber,
