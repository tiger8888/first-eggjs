# my-egg
<!-- 在此次添加使用文档 -->

### 本地开发

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### 部署

```bash
$ npm start
$ npm stop
```


### 说明

- 使用数据库 mongoDB （需要安装mongoDB）
  config.mongoose = {
    url: 'mongodb://localhost:27017/hello',
  };

- api的方法实现参考手册的RESTful

- 基本实现查询、修改、添加、删除等功能，没有做单元测试o(╥﹏╥)o

[egg]: https://eggjs.org
