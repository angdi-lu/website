$(document).ready(function() {
	$('.abstract').on('click', function() {
		if ($(this).find('.long').css('display') == 'none') {
			$(this).find('.long').css('display', 'block');
			$(this).find('.short').css('display','none');
		} else {
			$(this).find('.long').css('display', 'none');
			$(this).find('.short').css('display','block');
		}
	})
});

$(document).ready(function() {
	$('.long').each(function(){
		$(this).find('p').append("<a> [&#9652Less]</a>")
	});
	$('.short').each(function(){
		$(this).find('p').append("<a> [&#9662More]</a>")
	});
});


$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a:not(".dropdown-toggle")') ) {
        $(this).collapse('hide');
    }
});