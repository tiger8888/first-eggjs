'use strict';

const Controller = require('../core/baseController');

class DoctorController extends Controller {
    constructor(ctx) {
        super(ctx);
        this.indexRule = {
          name: { type: 'string', required: true },
          doctorId: { type: 'number', required: true },
        };
    }
    async index() {
        const { ctx } = this;
        const para = this.ctx.query;
        let page = parseInt(para.page);
        if (isNaN(page) || page < 1) {
            page = 0;
        } else {
            page--;
        }
        let size = parseInt(para.size);
        if (isNaN(size) || size < 0) {
            size = 10;
        }
        const result = await ctx.service.doctorServer.doctorList(page, size);
        ctx.body = {
            status: 201,
            data: result,
        }
    }
    async new() {
        const { ctx } = this;
        const result = await ctx.service.doctorServer.doctorAll();
        ctx.body = {
            status: 201,
            data: result,
        };
    }
    async show() {
        const { ctx } = this;
        const id = this.ctx.params.id;
        const result = await ctx.service.doctorServer.findbyid(id);
        ctx.body = {
            status: 201,
            data: result,
        }
    }
    async create() {
        const { ctx } = this;
        const doctor = this.ctx.request.body;
        const addmodel = Object();
        addmodel.name = doctor.name;
        addmodel.sex = doctor.sex;
        addmodel.grade = doctor.grade;
        addmodel.skill = doctor.skill;
        addmodel.introduce = doctor.introduce;
        addmodel.img = doctor.img;
        addmodel.bigImg = doctor.bigImg;
        addmodel.HomePageDisplay = doctor.HomePageDisplay;
        const result = await this.ctx.service.doctorServer.create(addmodel);
        this.ctx.body = {
            status: 201,
            data: result,
        }; 
    }
    async updata() {
        const { ctx } = this;
        const id = this.ctx.params.id;
        const updatemodel = await this.ctx.service.doctorServer.findbyid(id);
        const doctor = this.ctx.request.body;
        updatemodel.name = doctor.name;
        updatemodel.sex = doctor.sex;
        updatemodel.grade = doctor.grade;
        updatemodel.skill = doctor.skill;
        updatemodel.introduce = doctor.introduce;
        updatemodel.img = doctor.img;
        updatemodel.bigImg = doctor.bigImg;
        updatemodel.HomePageDisplay = doctor.HomePageDisplay;
        const result = await this.ctx.service.doctorServer.update(id, updatemodel);
        if (result) {
            ctx.body = {
                status: 201,
                data: result,
            };
        }
    }
    async destroy() {
        const { ctx } = this;
        const id = this.ctx.params.id;
        const doctor = await this.ctx.service.doctorServer.findbyid(id);
        if (this.isObjectEmpty(doctor)) {
            this.returnMessage(404, 'doctor has not found');
        }
        const result = await this.ctx.service.doctorServer.removedoctor(id);
        if (result) {
            ctx.body = {
                status: 201,
                data: 'Success',
            };
        }
    }
}

module.exports = DoctorController;