//Setting up route
angular.module('mean.system').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'modules/system/views/index.html'
        });
    }
]);