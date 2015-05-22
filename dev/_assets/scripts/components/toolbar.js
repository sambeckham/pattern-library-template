/*global $ */
$.fn.toolbar = function (options) {
    'use strict';
    console.log('This is the toolbar');
    $('.sizes').on('click', '[data-width]', function() {
	    var width = $(this).data('width');
	    $('body').animate({'width': width});
	});
};
