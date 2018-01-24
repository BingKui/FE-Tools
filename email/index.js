// 常用有相当登录地址
const mailUrl = [
    {suffix: 'qq.com', url: 'http://mail.qq.com'},
    {suffix: 'gmail.com', url: 'http://mail.google.com'},
    {suffix: 'sina.com', url: 'http://mail.sina.com.cn'},
    {suffix: '163.com', url: 'http://mail.163.com'},
    {suffix: '126.com', url: 'http://mail.126.com'},
    {suffix: 'yeah.net', url: 'http://www.yeah.net/'},
    {suffix: 'sohu.com', url: 'http://mail.sohu.com/'},
    {suffix: 'tom.com', url: 'http://mail.tom.com/'},
    {suffix: 'sogou.com', url: 'http://mail.sogou.com/'},
    {suffix: '139.com', url: 'http://mail.10086.cn/'},
    {suffix: 'hotmail.com', url: 'http://www.hotmail.com'},
    {suffix: 'live.com', url: 'http://login.live.com/'},
    {suffix: 'live.cn', url: 'http://login.live.cn/'},
    {suffix: 'live.com.cn', url: 'http://login.live.com.cn'},
    {suffix: '189.com', url: 'http://webmail16.189.cn/webmail/'},
    {suffix: 'yahoo.com.cn', url: 'http://mail.cn.yahoo.com/'},
    {suffix: 'yahoo.cn', url: 'http://mail.cn.yahoo.com/'},
    {suffix: 'eyou.com', url: 'http://www.eyou.com/'},
    {suffix: '21cn.com', url: 'http://mail.21cn.com/'},
    {suffix: '188.com', url: 'http://www.188.com/'},
    {suffix: 'foxmail.coom', url: 'http://www.foxmail.com'},
];
/**
 * 返回邮箱登录地址
 */

export const emailAddress = (email) => {
    const _suffix = email.split('@')[1];
    const obj = mailUrl.find(item => item.suffix === _suffix);
    return obj ? obj.url : '';
}
