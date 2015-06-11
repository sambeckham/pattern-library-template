/*global $ */
$.fn.toolbar = function (options) {
    'use strict';
    $('.toolbar__show').on('click', function(e){
    	e.preventDefault();
    	$('.toolbar').toggleClass('hide');
    	if($('.toolbar').hasClass('hide')){
    		$('body').css('margin-top', '0');
    	} else{
    		$('body').css('margin-top', '3em');
    	}

    });
    console.log('This is the toolbar');
    $('.toolbar').on('click', '[data-width]', function() {
	    var width = $(this).data('width');
	    $('body').animate({'width': width});
	});
};
