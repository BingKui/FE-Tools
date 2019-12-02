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
export const arrRemoveRepeat2 = (arr) => {
    return [...new Set(arr)];
};
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

// 降序返回数组（字符串）每个元素的出现次数
export const arrGetCount = (arr) => {
    let obj = {}, k, arr1 = []
    //记录每一元素出现的次数
    for (let i = 0, len = arr.length; i < len; i++) {
        k = arr[i];
        if (obj[k]) {
            obj[k]++;
        } else {
            obj[k] = 1;
        }
    }
    //保存结果{el-'元素'，count-出现次数}
    for (let o in obj) {
        arr1.push({el: o, count: obj[o]});
    }
    //排序（降序）
    arr1.sort(function (n1, n2) {
        return n2.count - n1.count
    });
    return arr1;
}