'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.resources('doctor', '/api/v1/doctor', controller.doctor);
  router.resources('hospital', '/api/v1/hospital', controller.hospital);
};
