(function() {
    'use strict';

    var arr_dependency, fn_initialize;

    arr_dependency = [
        'util.require_css',
        'moment',
        'util.foreach',
        'util.template'
    ];

    fn_initialize = function(requireCSS, moment, foreach, template) {

        requireCSS([
            'component.product_card'
        ]);

        var TEMPLATE = {
            item:
            '<div class="col-md-4">' +
            '<div class="product_card z-depth-1 hoverable">' +
            '<div class="card_header view overlay hm-white-slight">' +
            '<p class="card_label">' +
            //'<span class="label rgba-black-light">{{ originCountry }}</span>' +
            '<span class="label label-default"><span class="{{ iconCountry }}">' +
            '</span>{{ originCountry }}</span>' +

            '</p>' +
            '<img src="{{ imageSrc }}" class="img-responsive">' +
            '<div class="mask waves-effect waves-light"> </div>' +
            '</div>' +
            '<a class="btn-floating waves-effect waves-light red"><i class="material-icons">add</i></a>' +
            '<div class="card_content">' +
            '<p>{{ title }}</p>' +
            '</div>' +
            '<div class="card_footer">' +
            '<p>{{ requestCount }} Request</p>' +
            '</div>' +
            '</div>' +
            '</div>'
        };

        var fn_constr = (function() {
            var CONFIG_ITEM = 'recomended-item',
                CONFIG_ON_COMPLETE = 'on-complete';

            return function(obj_config) {
                var arr_item = obj_config[CONFIG_ITEM],
                    fn_onComplete = obj_config[CONFIG_ON_COMPLETE],
                    arr_fragment = [];

                foreach(arr_item, function(obj_item) {
                    arr_fragment.push(template(TEMPLATE.item, {
                        imageSrc: obj_item.imageSrc,
                        title: obj_item.title,
                        originCountry: obj_item.originCountry,
                        iconCountry: obj_item.iconCountry,
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
