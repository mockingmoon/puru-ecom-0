'use strict';
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');

const indexRouter = require('../routes/index');
const usersRouter = require('../routes/users');

/* ADMIN */
const adminMainRouter = require('../routes/admin/admin');
const adminOrderRouter = require('../routes/admin/order');
const adminProductRouter = require('../routes/admin/product');

/* VENDOR */
const vendorRouter = require('../routes/vendor/vendor');

/* CUSTOMER */
const customerRouter = require('../routes/customer/customer');

const app = express();

// HELMET FOR PROTECTION
app.use(helmet());

// CORS
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, Origin, X-Requested-With');
  next();
});

// app.options('*', (req, res) => res.sendStatus(200));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/* ROUTES */
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin/admin',adminMainRouter);
app.use('/admin/order',adminOrderRouter);
app.use('/admin/product',adminProductRouter);
app.use('/customer',customerRouter);
app.use('/vendor',vendorRouter);
// app.use('/',_Router);

module.exports = app;