'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const firstSchema = new mongoose.Schema({
    name: String,
    sex: String,
    grade: String,
    skill: String,
    introduce: String,
    img: String,
    bigImg: String,
    HomePageDisplay: Boolean,
  });

  return mongoose.model('First', firstSchema);
};
