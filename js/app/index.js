(function () {
    'use strict';

    var arr_dependency, fn_initialize;

    arr_dependency = [
        'jquery',
        'util.require_css',
        'full_page',
        'app.manager',
        'app.about.manager',

        // 'app.recomend_product.manager',
        // 'app.member.manager',
    ];

    fn_initialize = function ($, requireCSS, fullPage, Test, AboutManager) {

        requireCSS([
            'full_page',
            'reset'
        ]);

        var fn_init = (function () {

            $('#fullpage').fullpage({
                //Navigation
                menu: '#js_menu',
                anchors: ['firstPage', 'secondPage', '3rdPage'],
                navigation: false,
                navigationPosition: 'right',
                navigationTooltips: ['firstSlide', 'secondSlide'],
                showActiveTooltip: false,
                slidesNavigation: true,
                slidesNavPosition: 'bottom',
                css3: true,
                sectionsColor: ['#1bbc9b', '#3B3F45', '#7BAABE'],

                fixedElements: '#header, .footer',

                //Custom selectors
                sectionSelector: '.js_section',
                slideSelector: '.js_slide',
            });

            // Test.init({
            //     'container': document.querySelector('#fullPage')
            // });

            // RecomendItemManager.init({
            //     'container': document.querySelector('#js_recomend_product_box')
            // });

            AboutManager.init({
                'container': document.querySelector('#js_about_box')
            });

            // MemberManager.init({
            //     'container': document.querySelector('#js_signup_modal')
            // });

            // fix menu when passed
            $('#js_main_header').visibility({
                once: false,
                onBottomPassed: function () {
                    $('.fixed.menu').transition('fade in');
                },
                onBottomPassedReverse: function () {
                    $('.fixed.menu').transition('fade out');
                }
            });
            // create sidebar and attach to menu open
            $('.ui.sidebar').sidebar('attach events', '.toc.item');

        } ());

        return {
            init: fn_init
        };
    };

    define(arr_dependency, fn_initialize);
} ());