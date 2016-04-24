
/* global requirejs */

requirejs.config({
    baseUrl: 'js/',

    paths: {
        /* third party libraries */
        'jquery': ['lib/jquery-2.1.1.min'],
        'underscore': ['lib/underscore.min'],
        'moment': ['lib/moment.min'],
        'full_page': ['lib/jquery.fullPage.min'],
        'semantic': ['lib/semantic.min'],

        /* configurations */
        'config.common_css': ['config/common_css'],
        'config.pages': ['config/pages'],

        /* utilities */

        'util.require_css': ['util/require_css'],
        'util.foreach': ['util/foreach'],
        'util.template': ['util/template'],

        /*
        'util.loader': ['util/loader'],
        'util.dom': ['util/dom'],
        'util.dom_event': ['util/dom_event'],
        'util.uuid': ['util/uuid'],
        'util.sorter': ['util/sorter'],
        'util.select_binder': ['util/select_binder'],
        'util.http': ['util/http'],
        'util.response_parser': ['util/response_parser'],
        'util.search_binder': ['util/search_binder'],
        'util.random': ['util/random'],
        'util.range': ['util/range'],
        'util.debounce': ['util/debounce'],
        'util.random_color': ['util/random_color'],
        'util.client_storage': ['util/client_storage'],
        'util.logger': ['util/logger'],
        'util.popup': ['util/popup'],
        'util.user_info': ['util/user_info'],
        'util.device_info': ['util/device_info'],
        'util.barcode_scanner': ['util/barcode_scanner'],
        'util.camera': ['util/camera'],
        'util.push_notification': ['util/push_notification'],
        'util.query_parser': ['util/query_parser'],
        'util.connection_validator': ['util/connection_validator'],
        'util.keycode': ['util/keycode'],
        'util.splash_screen': ['util/splash_screen'],
        'util.platform': ['util/platform'],
        'util.response_handler': ['util/response_handler'],
        'util.pull_to_refresh': ['util/pull_to_refresh'],
        'util.status_bar': ['util/status_bar'],
        'util.theme': ['util/theme'],
        'util.standard_template': ['util/standard_template'],
        'util.description': ['util/description'],
        'util.parser': ['util/parser'],

        */

        /* application specificied libraries */
        'app.index': ['app/index'],
        'app.constructor': ['app/constructor'],
        'app.manager': ['app/manager'],
        
        'app.about.manager': ['app/dashboard/about/manager'],
        'app.about.provider': ['app/dashboard/about/provider'],
        'app.about.constructor': ['app/dashboard/about/constructor'],

        // 'app.recomend_product.manager': ['app/dashboard/recomend_product/manager'],
        // 'app.recomend_product.provider': ['app/dashboard/recomend_product/provider'],
        // 'app.recomend_product.constructor': ['app/dashboard/recomend_product/constructor'],


        // 'app.member.manager': ['app/member/manager'],
        // 'app.member.provider': ['app/member/provider'],
        // 'app.member.constructor': ['app/member/constructor'],

    },

    config: {
        moment: {
            noGlobal: true
        }
    }
});