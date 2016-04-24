(function () {
    'use strict';

    var arr_dependency, fn_initialize;

    arr_dependency = [
        'require',
        'underscore',
        'util.foreach',
        'config.common_css'
    ];

    fn_initialize = function (require, _, foreach, CONFIG) {
        var g_document = window.document;

        var EL_HEAD = g_document.querySelector('head'),
            BASE_URL = require.toUrl('.').replace('js', 'css'),
            INSERTED_STYLESHEETS = [];

        var fn_insert = function (str_name) {
            if (!CONFIG.hasOwnProperty(str_name)) {
                console.warn('invalid style sheet:', str_name);

                return;
            }

            var str_url = BASE_URL + CONFIG[str_name] + '.css',
                el_link = g_document.createElement('link');

            el_link.type = 'text/css';
            el_link.rel = 'stylesheet';
            el_link.href = str_url;

            EL_HEAD.appendChild(el_link);
            INSERTED_STYLESHEETS.push(str_name);
        };

        var fn_isStyleSheetInserted = function (str_name) {
            return (INSERTED_STYLESHEETS.indexOf(str_name) >= 0);
        };

        return function (obj_input) {
            var arr_module = [obj_input];

            if (_.isArray(obj_input)) {
                arr_module = obj_input;
            }

            foreach(arr_module, function (str_name) {
                if (fn_isStyleSheetInserted(str_name)) {
                    return;
                }

                fn_insert(str_name);
            });
        };
    };

    define(arr_dependency, fn_initialize);
}());