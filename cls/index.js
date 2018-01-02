/**
 * 不定参数返回所需要的class样式属性
 * @param  {argument} ...args 不定参数
 */
export const classArr =  (...args) => {
    let _arr = [];
    for (let arg of args) {
        let _item = arg instanceof Array ? arg : (arg || "").split(" ");
        _arr = _arr.concat(_item);
    }
    return _arr.join(" ");
}