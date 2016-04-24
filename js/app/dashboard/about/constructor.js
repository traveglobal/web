(function () {
    'use strict';

    var arr_dependency, fn_initialize;

    arr_dependency = [
        'util.require_css',
        'moment',
        'util.foreach',
        'util.template'
    ];

    fn_initialize = function (requireCSS, moment, foreach, template) {

        requireCSS([
        ]);

        var TEMPLATE = {
            item:
            '<div class="column labels">' +
            '<div><i class="{{ icon }}" style="color:{{ color }}"></i></div>' +
            '<h4 class="ui header" style="color:{{ color }}">{{ title }}</h4>' +
            '<h6 class="ui header">{{ description }}</h6>' +
            '</div>'
        };

        var fn_constr = (function () {
            var CONFIG_ITEM = 'about',
                CONFIG_ON_COMPLETE = 'on-complete';

            return function (obj_config) {
                var arr_item = obj_config[CONFIG_ITEM],
                    fn_onComplete = obj_config[CONFIG_ON_COMPLETE],
                    arr_fragment = [];

                foreach(arr_item, function (obj_item) {
                    arr_fragment.push(template(TEMPLATE.item, {
                        icon: obj_item.icon,
                        title: obj_item.title,
                        description: obj_item.description,
                        color: obj_item.color
                    }));
                });

                fn_onComplete(arr_fragment.join(''));
            };
        } ());

        return {
            constr: fn_constr
        };
    };

    define(arr_dependency, fn_initialize);
} ());
