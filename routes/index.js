let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.redirect('/public/index.html');
});

module.exports = router;
