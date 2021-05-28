'use strict';
const { createOrUpdateUser} = require('../models/user/common');

const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  return res.send({status:1, data:true});
});

module.exports = router;
