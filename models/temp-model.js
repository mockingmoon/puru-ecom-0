'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tempSchema = new Schema({
  n:{
    type: String
  }
});

const TempModel = mongoose.model('ModelName', tempSchema);

module.exports = TempModel;