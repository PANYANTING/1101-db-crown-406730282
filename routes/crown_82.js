var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown_82', { title: 'Express',name:'PANYANTING',id:'406730282' });
});

module.exports = router;
