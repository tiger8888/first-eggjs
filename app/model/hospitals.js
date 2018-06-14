'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const hospitalSchema = new mongoose.Schema({
    hospital: String,
    introduce: String,
    nameEN: String,
  });

  return mongoose.model('Hospital', hospitalSchema);
};
