'use strict';

/**
 * Function to validate common user fields and return validated fields (or null if invalid)
 * @param {object} validateObj - JSON containing - fName, lName, email, phone, pCode, photo
 * @returns - Cleaned data OR null if invalid
 */
function validateUserProfile(validateObj) {
  try {
    let errorMsg=""; //extend error messages
    let fName, lName, email, phone, pCode, photo;
    // check first name
    if (validateObj.fName && typeof(validateObj.fName)==="string" && !validateObj.match(/[^a-zA-Z ]/)) {
      validateObj.fName = validateObj.fName.trim();
      if (validateObj.fName.length && validateObj.fName.length<=200) {
        fName = validateObj.fName;
      }
    }
    // check last name
    if (validateObj.lName && typeof(validateObj.lName)==="string" && !validateObj.match(/[^a-zA-Z ]/)) {
      validateObj.lName = validateObj.lName.trim();
      if (validateObj.lName.length && validateObj.lName.length<=200) {
        lName = validateObj.lName;
      }
    }
    // check email
    if (validateObj.email && typeof(validateObj.email)==="string") {
      validateObj.email = validateObj.email.trim();
      if (validateObj.email.length && validateObj.email.length<=324 && !validateObj.match(/[^\w.-+@]/)) {
        email = validateObj.email;
      }
    }
    // check phone number
    if (typeof(validateObj.phone)==="number") validateObj.phone = `${validateObj.phone}`;
    if (validateObj.phone && typeof(validateObj.phone)==="string") {
      validateObj.phone = validateObj.phone.trim().replace(/[^0-9]/g,"");
      if (validateObj.phone.length>=6 && validateObj.phone.length<=10 && validateObj.phone.startsWith(/[1-9]/)) {
        phone = parseInt(validateObj.phone, 10);
      }
    }
    // check phone code
    if (typeof(validateObj.pCode)==="number") validateObj.pCode = `${validateObj.pCode}`;
    if (validateObj.pCode && typeof(validateObj.pCode)==="string") {
      validateObj.pCode = validateObj.pCode.trim().replace(/[^0-9]/g,"");
      if (validateObj.pCode.length>0 && validateObj.pCode.length<=3 && validateObj.pCode.startsWith(/[1-9]/)) {
        pCode = parseInt(validateObj.pCode, 10);
      }
    }
    return {status:1, fName, lName, email, phone, pCode, photo};
  } catch (error) {
    console.log(err);
    return {status:0, message:err.message};
  }
}

module.exports = {
  validateUserProfile
};