'use strict';
const express = require('express');
const router = express.Router();

/* MODELS */

/* TEMPLATE */
router.post("/path-to-customer-action", async function (req, res) {
  try {
    const data = {};
    return res.status(200).send({status:1, data});
  } catch (err) {
    console.error(err);
    return res.status(err.status || 500).send({status:0, message:err.message});
  }
});

router.post("/place-order", async function (req, res) {
  try {
    const data = {};
    // LOGIC TO PLACE ORDER
    return res.status(200).send({status:1, data});
  } catch (err) {
    console.error(err);
    return res.status(err.status || 500).send({status:0, message:err.message});
  }
});

router.post("/cancel-order", async function (req, res) {
  try {
    const data = {};
    // LOGIC TO CANCEL ORDER
    return res.status(200).send({status:1, data});
  } catch (err) {
    console.error(err);
    return res.status(err.status || 500).send({status:0, message:err.message});
  }
});

router.post("/return-order-item", async function (req, res) {
  try {
    const data = {};
    // LOGIC TO REGISTER ORDER ITEM RETURN REQUESTs
    return res.status(200).send({status:1, data});
  } catch (err) {
    console.error(err);
    return res.status(err.status || 500).send({status:0, message:err.message});
  }
});

module.exports = router;
