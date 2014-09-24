/*global define:false */
define(['jquery'], function ($) {
    'use strict';
    $.fn.logWidth = function (options) {
        return this.each(function () {
            console.log('Plugin test', $(this).width());
        });
    };
});