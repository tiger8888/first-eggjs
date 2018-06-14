'use strict';
const Service = require('../core/baseService');

class doctorServer extends Service {
  // 医生列表
  async doctorList(pageindex, pagesize) {
    const result = {};
    const totalcount = await this.ctx.model.Firsts.find().count();
    const totalpage = parseInt((totalcount + pagesize - 1) / pagesize);
    const datalist = await this.ctx.model.Firsts.find().limit(pagesize).skip(pageindex * pagesize);
    result.totalpage = totalpage;
    result.totalcount = totalcount;
    result.pageindex = pageindex +1;
    result.datalist = datalist;
    return result;
  }
  async doctorAll() {
    const result = {};
    const totalcount = await this.ctx.model.Firsts.find().count();
    const datalist = await this.ctx.model.Firsts.find();
    result.totalcount = totalcount;
    result.datalist = datalist;
    return result;
  }
  async findbyid(id) {
    const result = await this.ctx.model.Firsts.findOne({ _id: id });
    return result;
  }
  async create (doctor) {
    const result = await this.ctx.model.Firsts.create(doctor);
    return result;
  }
  async update(id, updatemodel) {
    const resultFirstTime = await this.ctx.model.Firsts.findOneAndUpdate({ _id: id }, { $set: updatemodel });
    const result = await this.ctx.model.Firsts.findOne({ _id: id})
    return result;
  }
  async removedoctor(id) {
    const result = await this.ctx.model.Firsts.remove({ _id: id });
    return result;
  }
}
module.exports = doctorServer;
