// 将字符串的字符全部转换为大写字符
export function upperCase(params: String) {
    const arr = params.split('')
    let newStr = ''
    // 通过数组的forEach方法来遍历数组
    arr.forEach(function (value) {
        if (value >= 'a' && value <= 'z') newStr += value.toUpperCase()
        else newStr += value
    })
    return newStr
}