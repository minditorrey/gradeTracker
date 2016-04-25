'use strict';

var express = require('express');
var router = express.Router();

// var Grade = require('../models/grade');

//actual routes to get & send
router.route('/', (req, res) => {
	res.send('all the grades');

});





module.exports = router;