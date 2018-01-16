$(function() {

  // your code will go here
  $.ajax('https://www.codeschool.com/users/3302389.json', {
  	dataType: 'jsonp',
  	success: function(response) {
  		for (var e in response.courses.completed) {
  			$('#badges').append('<div class="course">' + e + '</div>');
  		}
  		$('.course').append('<h3>' + $('.course').closest('title') + '</h3'>);
  		$('.course').append('<img src=' + $('.course').closest('badge') + '>');
  		$('.course').append('<a href=' +$('.course').closest('url') +  'target = "_blank"></a>');
  	}
  });
});
