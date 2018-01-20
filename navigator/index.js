const ua = navigator.userAgent;
// 判断是否是Window平台
export const isWin = () => {
    return navigator.platform.indexOf('Win') !== -1;
}

// 判断是否是Mac平台
export const isMac = () => {
    return navigator.platform.indexOf('Mac') !== -1;
}

// 判断是否是Lunix平台
export const isLunix = () => {
    return /Linux/i.test(navigator.userAgent);
}

// 判读是否是Unix平台
export const isUnix = () => {
    return navigator.platform === 'X11';
}

// 判断平台（PC和移动）
export const isMobile = () => {
    const agents = ['Android', 'iPhone', 'Windows Phone', 'iPad', 'iPod'];
    return agents.find(item => ua.indexOf(item) > -1).length > 0;
}

// 安卓判断
export const isAndroid = () => {
    return ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;
}

// 苹果设备判断
export const isiPhone = () => {
    return ua.indexOf('iPhone') > -1;
}
export const isiPad = () => {
    return ua.indexOf('iPad') > -1;
}
export const isiPod = () => {
    return ua.indexOf('iPod') > -1;
}

// 判断用户使用的浏览器
// ie浏览器
export const isIE = () => {
    return /ie/i.test(ua.toLowerCase());
}
// Edge浏览器
export const isEdge = () => {
    return /edge/i.test(ua.toLowerCase());
}
// firefox浏览器
export const isFirefox = () => {
    return /firefox/i.test(ua.toLowerCase());
}
// 谷歌chrome浏览器
export const isChrome = () => {
    return /chrome/i.test(ua.toLowerCase());
}
// opera浏览器
export const isOpera = () => {
    return /opera/i.test(ua.toLowerCase());
}
// safari浏览器
export const isSafari = () => {
    return /safari/i.test(ua.toLowerCase());
}
// 微信浏览器
export const isWechatBrowers = () => {
    return /micromessenger/i.test(ua.toLowerCase());
}
// UC浏览器
export const isUC = () => {
    return /ucweb/i.test(ua.toLowerCase());
}
