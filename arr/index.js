// 判断一个对象是否是数组
export const isArray = (obj) => {
    return obj instanceof Array;
}
// 数组去重
export const arrRemoveRepeat = (arr) => {
    return arr.filter((item, index, self ) => {
        return self.indexOf(item) === index;
    });
}
// 数组合并,不定参,可以是多个数组
export const arrMerge = (...args) => {
    let _result = [];
    for (let item in args) {
        _result = [..._result, ...item];
    }
    return _result;
}
// 数组合并,去重  支持数字,字符串
export const arrMergeRemoveRepeat = (...args) => {
    return arrRemoveRepeat(arrMerge(args));
}
// 数组顺序打乱
export const arrUpset = (arr) => {
    return arr.sort(() => {
        return Math.random() - 0.5;
    });
}
// 数组最大值
export const arrMax = (arr) => {
    return Math.max.apply(null, arr);
}
// 数组最小值
export const arrMin = (arr) => {
    return Math.min.apply(null, arr);
}
// 数字数组求和
export const arrSum = (arr) => {
    return arr.reduce((pre, cur) => {
        return pre + cur;
    });
}
// 数字数组求平均值
export const arrAvg = (arr) => {
    return arrSum(arr) / arr.length;
}
// 获取指定下标到指定下标的数组
export const arrAppoint = (arr, s, e) => {
    return arr.slice(s, e);
}
