$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
	$('.carousel').carousel( { interval : 500 });
	$(".carousel").carousel('cycle');
	$("#carouselExampleIndicators").click(function(){
		if ($("#carouselButton").children("span").hasClass('fa-pause')) {
			$(".carousel").carousel('pause');
			$("#carouselButton").children("span").removeClass('fa-pause');
			$("#carouselButton").children("span").addClass('fa-play');
		}
		else if ($("#carouselButton").children("span").hasClass('fa-play')){
			$(".carousel").carousel('cycle');
			$("#carouselButton").children("span").removeClass('fa-play');
			$("#carouselButton").children("span").addClass('fa-pause');                    
		}
	});

	$('#modalDisplay').click( function() {
		$('#loginModal').modal('toggle');
	});
            
});