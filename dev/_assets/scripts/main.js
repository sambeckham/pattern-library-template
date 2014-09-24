/*global requirejs:false */
'use strict';

requirejs.config({
    baseUrl: '/scripts/plugins',
    paths: {
        jquery: '../../bower_components/jquery/dist/jquery'
    }
});

/*
    00. Test Code
*/


// Show Me The Code
// ----------
require(['jquery', 'testPlugin'], function($){
    // A test to check jQuery is running
    console.log('jQuery test', $.now());
    // A test to check the modules get loaded correctly
    $('body').logWidth();
});