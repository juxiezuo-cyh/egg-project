'use strict';

const Controller = require('egg').Controller;

class NewController extends Controller {
  async getNewList() {
    // curl 方法可以获取远程数据
    const url = this.config.api + 'appapi.php?a=getPortalList&catid=20&pag=1';
    const res = await this.ctx.curl(url);
    const data = JSON.parse(res.data);
    return data.result;
  }
}

module.exports = NewController;
