'use strict';

const Controller = require('../core/baseController');

class HospitalController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.indexRule = {
      hospital: { type: 'string', required: true },
    };
  }
  async index() {
    const { ctx } = this;
    const para = this.ctx.query;
    if (!this.isObjectEmpty(para.hospital)) {
      const result = await ctx.service.hospitalServer.find(para.hospital);
      ctx.body = {
        status: 201,
        data: result,
      };
    }  
  }
  async update() {
    const { ctx } = this;
    const HospitalId = this.ctx.params.id
    const updatemodel = await this.ctx.service.hospitalServer.findbyid(HospitalId);
    const params = this.ctx.request.body;
    updatemodel.hospital = params.hospital;
    updatemodel.introduce = params.introduce;
    updatemodel.nameEN = params.nameEN;
    const result = await this.ctx.service.hospitalServer.update(HospitalId, updatemodel);
    ctx.body = {
      status: 201,
      data: result,
    };
  }
}

module.exports = HospitalController;
