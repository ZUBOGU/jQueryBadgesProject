$(function() {

  // your code will go here
  $.ajax('https://www.codeschool.com/users/3302389.json', {
  	dataType: 'jsonp',
  	success: function(response) {
  		var courses = response.courses.completed;
  		for (j in courses) {
  			$('#badges').append('<div class="course"></div>');
  		}
  		$('#badges').find('.course').each(function (index) {
  			$(this).append('<h3>' + courses[index].title + '</h3>');
  			$(this).append('<img src=' + courses[index].badge + '>');
  			$(this).append('<a href=' + courses[index].url +  ' target = "_blank type ="button" class="btn btn-primary">See course</a>');
  		});	
  	}
  });
});



