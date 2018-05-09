// 检测是否是手机号
export const isPhone = (num) => {
    return /^1[3|4|5|7|8|9|6][0-9]{9}$/.test(num);
}
// 检测是否是固定电话
export const isTel = (num) => {
    return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(num);
}
// 检测是否是email地址
export const isEmail = (email) => {
    return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email);
}
// 检测是否是安卓手机
export const isAndriod = () => {}
// 检测是否是苹果设备
export const isiOS = () => {}
// 检测密码强度
export const pwdLevel = (pass) => {
    let _level = 0;
    if (pass.length < 6) {
        return _level;
    }
    if (/[0-9]/.test(pass)) {
        _level++;
    }
    if (/[a-z]/.test(pass)) {
        _level++;
    }
    if (/[A-Z]/.test(pass)) {
        _level++;
    }
    if (/[\.|-|_|~|,|?|\{|\}|\[|\]|\!|\@|\#|\$|\%]/.test(pass)) {
        _level++;
    }
    return _level;
}

