'use strict';

module.exports = {
  getIp() {
    // this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
    console.log(this.request.host);
    console.log(this.request);
  },
};
