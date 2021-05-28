'use strict';
/* 
!IMPORTANT!
This is a top-level JS File.
It should be imported only in routes/* files, NOT in any other models/* file
*/

const Vendor = require('./vendor.model');
const Customer = require('./customer.model');
const ModelNames = ["Customer", "Vendor"];
const Models = [Customer, Vendor];

const { validateUserProfile } = require('../validate.common');

/* TEMPLATE FOR FUNCTIONS
async function FUNC_NAME() {
  try {
    return {status:1, data:true};
  } catch (err) {
    console.log(err);
    return {status:0, data:false, message:err.message};
  }
}
*/

async function createOrUpdateUser(userObj) {
  try {
    if (!userObj || typeof(userObj)!=="object" || !userObj.ModelName || ModelNames.indexOf(userObj.ModelName)===(-1))
      throw new Error("Empty of invalid creation parameters!");
    const userModel = Models[ModelNames.indexOf(userObj.ModelName)];

    return {status:1, data:true};
  } catch (err) {
    console.log(err);
    return {status:0, data:false, message:err.message};
  }
}

module.exports = {
  createOrUpdateUser
};