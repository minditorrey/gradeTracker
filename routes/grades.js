'use strict';

var express = require('express');
var router = express.Router();

var Grade = require('../models/grade');

//actual routes to get & send
router.route('/')
	.get((req, res) => {
	//db.run will be calling this
		Grade.get((err, grades) => {
			if(err) {
				return res.status(400).send(err);
		}
		res.send(grades);
	});
})

	.post((req, res) => {
	//db.run will be calling this
	//req.body (data object)
		Grade.create(req.body, err => {
		if(err) {
			return res.status(400).send(err);
		}
		res.send();
		});
	});

	
module.exports = router;