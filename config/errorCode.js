'use strict';
// 错误列表
module.exports = {
  400: { code: 400, message: 'Invalid Param', detail: '' },
  401: { code: 401, message: 'Unauthorized', detail: '' },
  403: { code: 403, message: 'Forbidden', detail: '' },
  404: { code: 404, message: 'Not Found', detail: '' },
  500: { code: 500, message: 'Internal Server Error', detail: '' },
  502: { code: 502, message: 'Remote Error', detail: '' },
  10000: { code: 10000, message: '更新失败', detail: ''},
}
