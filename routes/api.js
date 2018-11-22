var express = require('express');
var router = express.Router();

router.get('/tacos', function(req, res) {
  res.json([
    'Carne Asada',
    'Al Pastor',
    'Pollo'
  ]);
});

module.exports = router;