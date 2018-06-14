'use strict';
const Service = require('../core/baseService');

class hospitalServer extends Service {
  // 医院列表
  async find(h) {
    const result = await this.ctx.model.Hospitals.findOne({ hospital: h });
    return result;
  }
  async findbyid(id) {
    const result = await this.ctx.model.Hospitals.findOne({ _id: id });
    return result;
  }
  async update(HospitalId, updatemodel) {
    const result = await this.ctx.model.Hospitals.findOneAndUpdate({ _id: HospitalId }, { $set: updatemodel });
    return result;
  }
}
module.exports = hospitalServer;
