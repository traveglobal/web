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
            'component.item_card'
        ]);

        var TEMPLATE = {
            item:
            '<div class="column">' +
            '<div class="ui fluid card shadow hoverable">' +
            '<div class="content">' +
            '<a class="ui right corner label">' +
            '<i class="star icon"></i>' +
            '</a>' +
            '<div class="header">{{ title }}</div>' +
            '</div>' +
            '<div class="ui fluid image">' +
            '<span class="ui blue ribbon label ">' +
            '<i class="{{ flagCode }} flag"></i>{{ originCountry }}' +
            '</span>' +
            '<img src="{{ imageSrc }}">' +
            '</div>' +
            '<div class="extra content center">' +
            '<p>{{ requestCount }} Request</p>' +
            '</div>' +
            '</div>' +
            '</div>'
        };

        var fn_constr = (function () {
            var CONFIG_ITEM = 'recomended-item',
                CONFIG_ON_COMPLETE = 'on-complete';

            return function (obj_config) {
                var arr_item = obj_config[CONFIG_ITEM],
                    fn_onComplete = obj_config[CONFIG_ON_COMPLETE],
                    arr_fragment = [];

                foreach(arr_item, function (obj_item) {
                    arr_fragment.push(template(TEMPLATE.item, {
                        imageSrc: obj_item.imageSrc,
                        title: obj_item.title,
                        originCountry: obj_item.originCountry,
                        flagCode: obj_item.flagCode,
                        requestCount: obj_item.requestCount,

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
