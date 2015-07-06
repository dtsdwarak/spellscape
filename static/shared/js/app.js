var flowApp = angular.module('flowApp', [
    'ngRoute',
    'RecursionHelper',
    'wizardDirectives',
    'ngAnimate', // used for transition
    'filterDate',
    'gettext' // this filter is used to show only date and date time fields in field validation
]);

flowApp.config(['$controllerProvider','$provide', function($controllerProvider, $provide) {
    //this helps to lazy load te controller and services
    //due to unit testing I am overriding default behaviour of controller, service ...
    //actually it should be flowApp.registry.controller, flowApp.regsitry.service ...
    flowApp.controller = $controllerProvider.register;
    flowApp.service =  $provide.service;

}]);

flowApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/form', {
        templateUrl: 'form/views/form.main.html',
        resolve: {
            load: function(lazyScript){
                return lazyScript.loadScript(['form/js/form.controller.js', 'form/js/form.service.js']);
            }
        }
      }).
      when('/workflow', {
        templateUrl: 'workflow/views/workflow.main.html',
        resolve: {
            load: function(lazyScript){
                return lazyScript.loadScript(['workflow/js/workflow.controller.js', 'workflow/js/workflow.service.js']);
            }
        }
      }).
      when('/permissions', {
        templateUrl: 'permissions/views/permissions.main.html',
        resolve: {
            load: function(lazyScript){
                return lazyScript.loadScript(['permissions/js/permissions.controller.js', 'form/js/form.service.js']);
            }
        }
      }).
      otherwise({
        redirectTo: '/form'
      });
}]);

