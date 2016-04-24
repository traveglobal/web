(function () {
    'use strict';

    var arr_dependency, fn_initialize;

    arr_dependency = [
    ];

    fn_initialize = function () {
        var OBJ_RESPONSE = [
            {
                title: "Accessibility",
                icon: 'road icon',
                color: '#aa66cc',
                description: "Get overseas brands without shipping restrictions.",
            }, {
                title: "Save Cost",
                icon: 'money icon',
                color: '#4285F4',
                description: "Save on exorbitant shipping fee by tapping on travellers",
            }, {
                title: "Unique Items",
                icon: 'gift icon',
                color: '#2BBBAD',
                description: "Post your item details and willing to pay amount to a traveller, who will help to buy from overseas.",
            }, {
                title: "Post Request",
                icon: 'comment outline icon',
                color: '#aa66cc',
                description: "Get overseas brands without shipping restrictions.",
            }, {
                title: "Safe Deposit",
                icon: 'protect icon',
                color: '#4285F4',
                description: "We will hold the payment until traveller comes back with your item. 7% + $2 service fee applies.",
            }, {
                title: "Traveller Fulfills",
                icon: 'shipping icon',
                color: '#2BBBAD',
                description: "Self-collect your requested item at Airfrov Collection Centre, or get it delivered to your address via courier.",
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