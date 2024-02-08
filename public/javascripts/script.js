$( function () {

	// project titles
/*
	$(document).ready(function() {
		$('.project h1, .project_item h3').each(function(){
	    var me = $(this)
       , t = me.text().split(' ');
	    me.html( '<span>'+t.shift()+'</span> '+t.join(' ') );
		});
	});
*/

	// share
	$('body').on('click', '.jsShareBtn', function(e) {
		e.preventDefault()
		$(this).closest('.jsShareBlock').toggleClass('active');
		$('.jsSocialList').slideToggle();
	});

	// styleguide
	$('.styleguide').on('change load', '.jsTriggerTheme', function() {
		if($(".jsTriggerTheme").is(':checked')) {
			$('body').addClass('inverse')
		}
		else {
			$('body').removeClass('inverse')
		}
	});

});
