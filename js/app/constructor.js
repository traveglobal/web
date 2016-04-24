(function () {
    'use strict';

    var arr_dependency, fn_initialize;

    arr_dependency = [
    ];

    fn_initialize = function () {


        var TEMPLATE = {
            item:
            '<ul id="menu">' +
            '<li data-menuanchor="firstPage" class="active"><a href="#firstPage">First slide</a></li>' +
            '<li data-menuanchor="secondPage"><a href="#secondPage">Second slide</a></li>' +
            '<li data-menuanchor="3rdPage"><a href="#3rdPage">Third slide</a></li>' +
            '</ul>' +
            '<div class="section" id="section1">' +
            '<div class="slide" id="slide1">' +
            '<div class="content">' +
            '<h1>No need for jQuery</h1>' +
            '<p>5 Kb gzipped!!</p>' +
            '<p>Improve the loading time of your site!</p>' +
            '</div>' +
            '</div>' +
            '<div class="slide" id="slide2">' +
            '<div class="content">' +
            '<h1>Slides too!</h1>' +
            '</div>' +
            '</div>' +
            '<div class="slide" id="slide2">' +
            '<div class="content">' +
            '<h1>More slides!</h1>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="section " id="section0" >' +
            '<div class="content">' +
            '<h1>fullPage.js</h1>' +
            '<p>Javascript only version</p>' +
            '</div>' +
            '</div>' +

            '<div class="section" id="section2">' +
            '<div class="content">' +
            '<h1>Compatible</h1>' +
            '<p>IE 8+ support.</p>' +
            '</div>' +
            '</div>'
        };

        var fn_constr = (function () {
            var CONFIG_ON_COMPLETE = 'on-complete';
            return function (obj_config) {
                var fn_onComplete = obj_config[CONFIG_ON_COMPLETE];

                fn_onComplete(TEMPLATE.item);
            };
        });

        return {
            constr: fn_constr
        };
    };

    define(arr_dependency, fn_initialize);
} ());
