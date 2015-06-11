/*global $ */
$.fn.toolbar = function (options) {
    'use strict';
    $('.toolbar__show').on('click', function(e){
    	e.preventDefault();
    	$('.toolbar').toggleClass('hide');
		var body = $('body');
    	if($(body).hasClass('add_margin')){
    		$(body).removeClass('add_margin');
    	} else{
    		$(body).addClass('add_margin');
    	}
    });
    console.log('This is the toolbar');
    $('.toolbar').on('click', '[data-width]', function() {
	    var width = $(this).data('width');
	    $('body').animate({'width': width});
	});
};
