'use strict';

var db = require('../config/db');

db.run(`CREATE TABLE IF NOT EXISTS grades (
	name TEXT,
	score INTEGER,
	totalPoints INTEGER,
	letterGrade TEXT,
	cumulativeGrade INTEGER
	)`);

//methods

//facilitates the db-I don't need the db in the route
exports.get = function(cb) {
	db.all('SELECT * FROM grades', cb)
};

exports.create = function(grade, cb) {
	//validation
	if(!grade.name || !grade.score) {
		return cb('Please fill out all fields.')
	}

	db.run('INSERT INTO grades (name, score, totalPoints, letterGrade, cumulativeGrade) VALUES (?, ?, ?, ?, ?)', 
		grade.name, 
		grade.score, 
		grade.totalPoints,
		grade.letterGrade,
		grade.cumulativeGrade,
		cb);
};