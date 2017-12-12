// url重定向
export const urlRedirect = (url, param) => {
    let _param = '';
    if (param) {
        for (let item of Object.keys(param)) {
            _param += `${item}=${param[item]}&`;
        }
        _param = _param.substr(0, _param.length - 1);
        window.location.href = url + '?' + _param;
    } else {
        window.location.href = url;
    }
}

// 获取url参数值
// key: 需要获取的key
export function urlLocalParam(key, url) {
    let _params = window.location.search;
    if (url) {
        _params = url.split('?')[1];
    }
    if (!_params) {
        return '';
    }
    const reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)');
    const obj = _params.substr(1).match(reg);
    if (obj != null) {
        return decodeURIComponent(obj[2]);
    }
    return '';
}

// 获取url的文件全称
const fileName = (url) => {
    const _urlArr = url.split('/');
    return _urlArr[_urlArr.length - 1];
}
// 返回url文件名称
// isSuffix 是否存在后缀
export const urlFileName = (url, isSuffix = true) => {
    const _file = fileName(url);
    if (isSuffix) {
        return _file;
    }
    return _file.split('.')[0];
}

// 返回url文件名后缀
export const urlFileSuffix = (url) => {
    const _file = fileName(url);
    const _fileArr = _file.split('.');
    return _fileArr[_fileArr.length - 1];
}