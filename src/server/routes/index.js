var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var name = ( req.user ) ? req.user.displayName : '';
  res.render('index', { title: 'Hello ' + name })
});

module.exports = router;
