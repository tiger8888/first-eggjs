'use strict';

const errorCode = require('./errorCode.js');
module.exports = appInfo => {
  const config = exports = {};
  config.onerror = {
    // 在此处定义针对所有响应类型的错误处理方法
    // 注意，定义了 config.all 之后，其他错误处理方法不会再生效
    all(err, ctx) {
      // json hander
      ctx.body = `{code:400,msg:${err.msg.detail}}`;
      ctx.status = err.msg.code; // 状态码
    },
  };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1528165183116_7617';
  // mongoDB config
  config.mongoose = {
    url: 'mongodb://localhost:27017/hello',
  };
  // add your config here
  config.middleware = [];
  // 关闭csrf,允许post DELETE PUT 进入
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: false, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    },
  };
  // 配置 egg-cors 跨域
  config.cors = {
    origin: '*',
  };

  // 接口错误代码
  config.error = errorCode;
  return config;
  
  mongoose = {
    enable: true,
    package: 'egg-mongoose'
  };
};
