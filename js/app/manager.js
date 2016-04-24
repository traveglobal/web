(function () {
    'use strict';

    var arr_dependency, fn_initialize;

    arr_dependency = [
        'app.constructor'
    ];

    fn_initialize = function (Constructor) {


        var MESSAGE = {
            unableToGetRecomendItem: {
                title: 'Failed to get recomend item',
                message: 'Please contact your administrator if this problem persists.'
            }
        };

        var fn_init = (function () {
            var CONFIG_CONTAINER = 'container';
            return function (obj_config) {
                var el_container = obj_config[CONFIG_CONTAINER];
                Constructor.constr({
                    'on-complete': function (str_fragment) {
                        el_container.innerHTML = str_fragment;
                    }
                });

            };
        } ());

        return {
            init: fn_init
        };
    };

    define(arr_dependency, fn_initialize);
} ());