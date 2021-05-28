'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vendorSchema = new Schema({
  fName:{
    type: String,
    required: true,
    maxLength: 200
  },
  lName: {
    type: String,
    maxLength: 200
  },
  photo: {
    type: String,
    maxLength: 2000,
    validate: {
      validator: function (va) {
        if (!va) return undefined;
        return (va && typeof(va)==="string" && va.match(/^http[s]?:\/\//));
      },
      message: "Please specify a valid Photo URL!"
    }
  },
  uid: {
    type: String,
    required: true,
    unique: true,
    maxLength: 2000
  },
  email: {
    type: String,
    required: true,
    unique: true,
    maxLength: 324
  },
  eValid: {
    type: Boolean,
    required: true,
    default: false
  },
  phone: {
    type: Number,
    required: true,
    min: 100000,
    max: 999999999999
  },
  pCode: {
    type: Number,
    required: true,
    min: 1,
    max: 999
  },
  pValid: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true
});

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;