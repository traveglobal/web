(function () {
    'use strict';

    var arr_dependency, fn_initialize;

    arr_dependency = [
        'underscore'
    ];

    fn_initialize = function (_) {
        _.templateSettings = {
            interpolate: /\{\{(.+?)\}\}/g
        };

        return function (templateHTML, templateData) {
            return _.template(templateHTML)(templateData);
        };
    };

    define(arr_dependency, fn_initialize);
}());