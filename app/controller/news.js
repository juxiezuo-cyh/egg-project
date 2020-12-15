'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {

    // 获取数据显示到页面
    const list = await this.service.new.getNewList();
    await this.ctx.render('news', {
      list,
    });
    // this.ctx.body = '新闻页面';

    // 调用extend 里面的 application的拓展
    console.log(this.app.foo());
    // 调用extend 里面的 Context 的拓展
    console.log(this.ctx.getIp());
    // 调用helper里的方法
    console.log(this.ctx.helper.getHelperData());
    // 调用request里的方法;
    console.log(this.ctx.response.foo());

  }
  async content() {
    const aid = this.ctx.query.aid;
    const list = await this.service.new.getNewsContent(aid);
    console.log(list);
    await this.ctx.render('newscontent', {
      list,
    });
  }
}

module.exports = NewsController;
