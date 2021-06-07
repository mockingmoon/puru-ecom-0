'use strict';
const express = require('express');
const router = express.Router();

/* MODELS */

/* TEMPLATE */
router.post("/path-to-vendor-action", async function (req, res) {
  try {
    const data = {};
    return res.status(200).send({status:1, data});
  } catch (err) {
    console.error(err);
    return res.status(err.status || 500).send({status:0, message:err.message});
  }
});

router.post("/create-product", async function (req, res) {
  try {
    const data = {};
    // LOGIC TO CREATE PRODUCT
    return res.status(200).send({status:1, data});
  } catch (err) {
    console.error(err);
    return res.status(err.status || 500).send({status:0, message:err.message});
  }
});

router.get("/get-product/:prodId", async function (req, res) {
  try {
    const data = {productId:req.params.prodId};
    // LOGIC TO CANCEL ORDER
    return res.status(200).send({status:1, data});
  } catch (err) {
    console.error(err);
    return res.status(err.status || 500).send({status:0, message:err.message});
  }
});

router.post("/update-product", async function (req, res) {
  try {
    const data = {};
    // LOGIC TO UPDATE PRODUCT
    return res.status(200).send({status:1, data});
  } catch (err) {
    console.error(err);
    return res.status(err.status || 500).send({status:0, message:err.message});
  }
});

module.exports = router;
