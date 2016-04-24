(function () {
    'use strict';

    var arr_dependency, fn_initialize;

    arr_dependency = [];

    fn_initialize = function () {
        return [{
            view: 'login',
            manager: 'app.login.view_manager'
        }, {
            view: 'about',
            manager: 'app.about.view_manager'
        }, {
            view: 'dashboard',
            manager: 'app.dashboard.view_manager'
        }, {
            view: 'leave',
            manager: 'app.leave.view_manager'
        }, {
            view: 'payslip',
            manager: 'app.payslip.view_manager'
        }];
    };

    define(arr_dependency, fn_initialize);
}());