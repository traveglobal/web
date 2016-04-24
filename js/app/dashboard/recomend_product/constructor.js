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
            'component.product_card'
        ]);

        var TEMPLATE = {
            item:

            <div class="column">
                <div class="ui fluid card shadow hoverable">
                    <div class="content">
                        <a class="ui right corner label">
                            <i class="star icon"></i>
                        </a>
                        <div class="header">Tokyo Banana will the name too long?</div>
                    </div>
                    <div class="ui fluid image">
                        <span class="ui red ribbon label ">
                            <i class="jp flag"></i>Japan
                        </span>
                        <img src="/img/product/tokyo_banana.jpg">
                </div>

                        <div class="extra content center">
                            <p>1 Request</p>
                        </div>

                    </div>
                </div>
                };

                var fn_constr = (function() {
            var CONFIG_ITEM = 'recomended-item',
                CONFIG_ON_COMPLETE = 'on-complete';

                return function(obj_config) {
                var arr_item = obj_config[CONFIG_ITEM],
                fn_onComplete = obj_config[CONFIG_ON_COMPLETE],
                arr_fragment =[];

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
