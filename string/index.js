import { isArray } from '../arr';
// 判断一个对象是否是字符串
export const isString = (obj) => {
    return typeof(obj) === 'string';
}
// 去除字符串空格
// type: 1-所有空格  2-前后空格  3-前空格 4-后空格
/**
 * 去除字符串空格
 * @param {string} str 需要去除空格的字符串
 * @param {number} type 去除空格类型 1-所有空格  2-前后空格  3-前空格 4-后空格
 */
export const strTrim = (str, type = 1) => {
    let reg = /\s+/g;
    switch (type) {
        case 2:
            reg = /(^\s*)|(\s*$)/g;
            break;
        case 3:
            reg = /(^\s*)|(\s*$)/g;
            break;
        case 4:
            reg = /(^\s*)|(\s*$)/g;
            break;
        default:
            break;
    }
    return str.replace(reg, '');
}
// 字符串大小写切换
// type: 1-首字母大写 2-首页母小写 3-大小写转换 4-全部大写 5-全部小写
/**
 * @param  {string} str
 * @param  {number} type=1
 */
export const strCase = (str, type = 1) => {
    const toggleCase = (str) => {
        let _str = '';
        str.split('').forEach(item => {
            if (/^([a-z]+)/.test(item)) {
                _str += item.toUpperCase();
            } else if (/^([A-Z]+)/.test(item)) {
                _str += item.toLowerCase();
            } else {
                _str += item;
            }
        });
        return _str;
    }
    switch (type) {
        case 1:
            return str.replace(/\b\w+\b/g, word => {
                return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
            });
        case 2:
            return str.replace(/\b\w+\b/g, word => {
                return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
            });
        case 3:
            return toggleCase(str);
        case 4:
            return str.toUpperCase();
        case 5:
            return str.toLowerCase();
        default:
            return str;
    }
}

// 字符串循环复制
// count: 次数
export const strRepeat = (str, count) => {
    let _str = '';
    for (let i = 0; i < count; i++) {
        _str += str;
    }
    return _str;
}

// 字符串特殊次替换
// f: 需要替换的字符 string or array
// r: 替换的字符 string
export const strReplace = (str, f, r = '') => {
    const _arrBool = isArray(f);
    const _strBool = isString(f);
    if (_arrBool) {
        for (let i = 0; i < f.length; i ++) {
            const _regTemp = new RegExp(f[i], "g");
            str = str.replace(_regTemp, r);
        }
        return str;
    }
    if (_strBool) {
        const _reg = new RegExp(f, "g");
        return str.replace(_reg, r);
    }
    return str;
}
// 返回一个字符在字符串中出现的次数
export const strCount = (str, s) => {
    return str.split(s).length - 1;
}
// 字符串数组拼接
export const strJoint = (strArr) => {
    return strArr.reduce((pre, cur) => {
        return pre + cur;
    });
}