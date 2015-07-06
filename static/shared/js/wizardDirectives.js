var materializeSelect = angular.module('materializeSelect', [])
.controller('Controller', ['$scope', function($scope) {
}])
.directive('select', function() {
  return {
    restrict: 'E',
    link: function (scope, element) {
        $('select').not('.disabled').material_select();
    }
  };
});

var materializeSelect = angular.module('pushpin', [])
.controller('Controller', ['$scope', function($scope) {
}])
.directive('select', function() {
  return {
    restrict: 'E',
    link: function (scope, element) {
        $('select').not('.disabled').material_select();
    }
  };
});

var flowInclude = angular.module('flowInclude', [])
.controller('Controller', ['$scope', function($scope) {
}])
.directive('flowInclude', function() {
  return {
    restrict: 'E',
    templateUrl: function(elem, attr){
      return attr.url;
    }
  };
});

var flowPrivateInclude = angular.module('flowPrivateInclude', [RecursionHelper])
.directive('flowPrivateInclude', function() {
  return {
    restrict: 'E',
    scope: {
      steps: '='
    },
    templateUrl: function(elem, attr){
      return attr.url;
    },
    compile: function(element) {
        return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn){
    });
    }
  };
});