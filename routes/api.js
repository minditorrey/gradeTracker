'use strict';

var express = require('express');
var router = express.Router();

//individual api controller routes
router.use('/grades', require('./grades'));


module.exports = router;