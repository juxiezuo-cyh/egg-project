// 拓展里面引入第三方模块

'use strict';

const sd = require('silly-datetime');

module.exports = {
  formartTime(param) {
    // this 是 helper 对象，在其中可以调用其他 helper 方法
    // this.ctx => context 对象
    // this.app => application 对象

    // 格式化日期
    // param 为时间戳
    sd.format(new Date(param), 'YYYY-MM-DD HH:mm');

    // 调动方式为： 在html中，helper.format()的方式来调用
  },
  getHelperData() {
    return '我是helper里面的数据';
  },
};
