'use strict';

const Service = require('egg').Service;
class BaseService extends Service {
  async request(method, params, url) {
    const { ctx } = this;
    try {
      const result = await ctx.curl(url, {
        method,
        data: params,
        dataType: 'json',
        contentType: 'json',
      });
      return result;
    } catch (err) {
      this.ctx.helper.throwError(502);
    }
  }
}

module.exports = BaseService;
