'use strict';
const express = require('express');
const router = express.Router();

/* MODELS */

/* TEMPLATE */
router.post("/path-to-admin-order-action", async function (req, res) {
  try {
    const data = {};
    return res.status(200).send({status:1, data});
  } catch (err) {
    console.error(err);
    return res.status(err.status || 500).send({status:0, message:err.message});
  }
});

module.exports = router;
