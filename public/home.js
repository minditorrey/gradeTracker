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
		letterGrade: function(score){
			if(score >90) {
				return "A";
			} else if(score > 80 < 90) {
				return "B";
			} else if(score > 70 < 80) {
				return "C";
			} else if(score > 60 < 70) {
				return "D";
			} else {
				return "F";
			}
		},

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