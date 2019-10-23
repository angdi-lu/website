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
		$(this).find('p').append("<a> [&#9652Collapse]</a>")
	});
	$('.short').each(function(){
		$(this).find('p').append("<a> [&#9662Expand]</a>")
	});
});


$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a:not(".dropdown-toggle")') ) {
        $(this).collapse('hide');
    }
});

$(document).ready(function() {
	resizeText();
	var resizeId;
	$(window).on('resize', function() {
		clearTimeout(resizeId);
		resizeId = setTimeout(resizeText, 250);
		        resizeText();
	});
	$(window).on('mousemove', function() {
		$('*').css('transition-property','');
	});

function resizeText() {
		// Standard height, for which the body font size is correct
		var preferredFontSize = 16; // % 

/*     	var preferredSize = 1920 * 1080;
		var currentSize = $(window).width() * $(window).height();
		var scalePercentage = Math.sqrt(currentSize) / Math.sqrt(preferredSize);
		scalePercentage = Math.sqrt(scalePercentage);
		var newFontSize = preferredFontSize * scalePercentage;  */

		var preferredNumber = 70
		var currentSize = $(window).width()/Math.pow(Math.max(1,0.6*$(window).width()/$(window).height()),0.6)
		var currentSizeP
		var currentSizeC
		var ratio=0.5
		var fontLargeP=1.5
		var fontLargeC=1.5
		if (currentSize >2560 ){
			currentSizeNew=2560*ratio;
			currentSizeP=currentSize;
			currentSizeC=currentSize
		}
		else if (currentSize<400){
			currentSizeNew=currentSize*0.95;
			currentSizeC=currentSize*fontLargeC;
			currentSizeP=currentSize*fontLargeP
		}
		else if (currentSize<=767){
			currentSizeP=(ratio+Math.pow((2560-currentSize)/2160,2)*(fontLargeP-ratio))*currentSize;
			currentSizeC=(ratio+Math.pow((2560-currentSize)/2160,3)*(fontLargeC-ratio))*currentSize;
			currentSizeNew=(0.90-(0.90-ratio)*(currentSize-400)/2160)*currentSize;
		}
		else {
			currentSizeP=(ratio+Math.pow((2560-currentSize)/2160,2)*(fontLargeP-ratio))*currentSize;
			currentSizeC=(ratio+Math.pow((2560-currentSize)/2160,3)*(fontLargeC-ratio))*currentSize;
			currentSizeNew=(0.90-(0.90-ratio)*(currentSize-400)/2160)*currentSize;
		}
		var newFontSize = Math.round(currentSizeC/preferredNumber); 
		var firstHeight = Math.max(50*newFontSize,$(window).height());
		var paraFontSize = Math.max(Math.round(currentSizeP/preferredNumber),12);
		var baseLength = 8 * newFontSize;
		var navHeight = baseLength +0.5*newFontSize;
		
		if (currentSize<=767){
		$('*').css('transition-property','none');
		$('.container-alt').css("width",currentSize*0.95+'px');
		$('.col1').css("min-height",firstHeight+'px');
		$('section-title').css("height",navHeight+'px');
		$('.container-profile').css("width", currentSize*0.99+'px');
 
		
		$(".col1").css("font-size", newFontSize + 'px');
		$('.container-alt').css("font-size", paraFontSize+ 'px');
		$('.container-profile').css("font-size", '9px');
		$('.long').css("font-size", paraFontSize+ 'px');
		$('.short').css("font-size", '14px');
		$('.biography').css("font-size", '12px');
		$('.paper-title').css("font-size", '14px');
		$('.coauthors').css("font-size", '14px');
		$('.li-sub').css("font-size", '14px');
		$('section-title').css("font-size",newFontSize+'px');
		}

		else {
		$('*').css('transition-property','none');
		$('.container-alt').css("width",currentSizeNew+'px');
		$('.col1').css("min-height",firstHeight+'px');
		$('section-title').css("height",navHeight+'px');
 
		
		$(".col1").css("font-size", newFontSize + 'px');
/*		$('.container-alt').css("font-size", paraFontSize+ 'px'); */
		$('section-title').css("font-size",newFontSize+'px')	
		}
	};
}) 