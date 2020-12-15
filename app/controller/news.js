'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    // await this.ctx.render('news');
    // 获取数据显示到页面

    const list = await this.service.new.getNewList();
    await this.ctx.render('news', {
      list,
    });
    // this.ctx.body = '新闻页面';
  }
  async content() {

  }
}

module.exports = NewsController;
