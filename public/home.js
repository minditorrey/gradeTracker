'use strict';

$(() => {

	$('.newGrade').click(openNewGradeModal);
	$('#submitNewGrade').click(createNewGrade);
})



function createNewGrade(e) {
	e.preventDefault();

	var newGrade = {
		name: $('#name').val(),
		score: $('#score').val(),
		totalPoints: $('#totalPoints').val(),
		letterGrade: $('#letterGrade').val(),
		cumulativeGrade: $('#cumulativeGrade').val()
	};

	$('#name').val('');
	$('#score').val('');
	$('#totalPoints').val('');
	$('#letterGrade').val('');
	$('#cumulativeGrade').val('');


	$.post('/api/grades', newGrade)
		.done(() => {

			//render to DOM
			$('#myModal').modal('hide');
		})
		.fail(err => {
			console.error('ERROR creating new grade', err);
		});
}

function openNewGradeModal () {
	$('#myModal').modal({show: true});
}