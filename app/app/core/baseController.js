'use strict';
const Controller = require('egg').Controller;

class BaseController extends Controller {
  /**
     * 自定义传参验证
     * @param {Object} rule  验证规则
     * @param {Object} value 需要验证的值
     * @return {Object} null
     */
  validateParam(rule, value) {
    try {
      this.ctx.validate(rule, value);
    } catch (err) {
      const msg = Object.assign(
        this.config.error[400],
        { detail: `Parameter [${err.errors[0].field}] ${err.errors[0].message}` });
      this.ctx.throw(400, { msg });
      return {};
    }
  }
  isObjectEmpty(obj) {
    let isEmpty = false;
    if (!obj || Object.keys(obj).length === 0) { // 是否为null,undefined,或者空对象
      isEmpty = true;
    }
    return isEmpty;
  }
}

module.exports = BaseController;
