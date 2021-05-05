let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  return res.send('Welcome User!');
});

module.exports = router;
