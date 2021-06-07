'use strict';
const { createOrUpdateUser} = require('../models/user/common');

const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  return res.send({status:1, data:true});
});

router.post("/login", async function (req, res) {
  try {
    const data = {};
    let loggedIn=false;
    // LOGIC TO LOGIN
    // loggedIn = true;
    return res.status(200).send({status:1, loggedIn, data});
  } catch (err) {
    console.error(err);
    return res.status(err.status || 500).send({status:0, message:err.message});
  }
});

router.post("/logout", async function (req, res) {
  try {
    const data = {};
    let loggedOut=false;
    // LOGIC TO LOGIN
    // loggedOut = true;
    return res.status(200).send({status:1, loggedOut, data});
  } catch (err) {
    console.error(err);
    return res.status(err.status || 500).send({status:0, message:err.message});
  }
});

router.get("/get-profile", async function (req, res) {
  try {
    const data = {};
    // LOGIC TO GET PROFILE
    return res.status(200).send({status:1, data});
  } catch (err) {
    console.error(err);
    return res.status(err.status || 500).send({status:0, message:err.message});
  }
});

router.post("/update-profile", async function (req, res) {
  try {
    const data = {};
    const fields2update = req.body || {};
    // LOGIC TO LOGIN
    return res.status(200).send({status:1, fields2update, data});
  } catch (err) {
    console.error(err);
    return res.status(err.status || 500).send({status:0, message:err.message});
  }
});


module.exports = router;
