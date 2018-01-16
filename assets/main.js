$(function() {

  // your code will go here
  $.ajax('https://www.codeschool.com/users/3302389.json', {
  	dataType: 'jsonp',
  	success: function(response) {
  		console.log('response', response.courses.completed);;
  		for (var e in response.courses.completed) {
  		 	$('#badges').append('<div class="course"></div>');
  		 	var course = response.courses.completed[e];
  		 	$('#badges .course:nth-child('+ e + 1 + ')').append('<h3>' + course.title + '</h3>');
  		 	$('#badges .course:nth-child('+ e + 1+ ')').append('<img src=' + course.badge + '>');
  		}
  		// $('.course').append('<a href=' +$('.course').closest('url') +  'target = "_blank"></a>');
  	}
  });
});
