(function () {
    'use strict';

    var arr_dependency, fn_initialize;

    arr_dependency = [
    ];

    fn_initialize = function () {
        var OBJ_RESPONSE = [
            {
                title: "Tokyo Banana",
                originCountry: "Japan",
                iconCountry: "flag-icon flag-icon-jp",
                requestCount: "28",
                imageSrc: "../../../../img/product/tokyo_banana.jpg",
            }, {
                title: "Play No More",
                originCountry: "South Korea",
                iconCountry: "flag-icon flag-icon-kr",
                requestCount: "2",
                imageSrc: "../../../../img/product/play_no_more.jpg",
            }, {
                title: "Snail White",
                originCountry: "Thailand",
                iconCountry: "flag-icon flag-icon-th",
                requestCount: "12",
                imageSrc: "../../../../img/product/snail_white.jpg",
            }];

        var fn_get = (function () {
            var CONFIG_ON_SUCCESS = 'on-success';

            return function (obj_config) {
                var fn_onSuccess = obj_config[CONFIG_ON_SUCCESS];
                fn_onSuccess(OBJ_RESPONSE);
            };
        } ());

        return {
            get: fn_get
        };
    };

    define(arr_dependency, fn_initialize);
} ());