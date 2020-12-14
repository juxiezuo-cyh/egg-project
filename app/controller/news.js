'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    const msg = '后台ejs';
    const list = [ 111, 222, 333 ];
    await this.ctx.render('news', {
      msg,
      list,
    });
  }

  async content() {
    // 获取页面地址的传值
    const query = this.ctx.query.id;
    console.log(query);
    this.ctx.body = '新闻详情';
  }

  async newsList() {
    // 获取页面地址的传值
    const params = this.ctx.params;
    console.log(params);
    this.ctx.body = '新闻列表';
  }

}

module.exports = NewsController;
