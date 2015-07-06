//ref: http://www.royts.com/2013/06/css-lazy-loading-in-angularjs-app.html
flowApp.directive('lazyStyle',
  function () {
    var loadedStyles = {};
    return {
      restrict: 'E',
      link: function (scope, element, attrs) {
 
        attrs.$observe('href', function (value) {
 
          var stylePath = value;
 
          if (stylePath in loadedStyles) {
            return;
          }
 
          if (document.createStyleSheet) {
            document.createStyleSheet(stylePath); //IE
          } else {
            var link = document.createElement("link");
            link.type = "text/css";
            link.rel = "stylesheet";
            link.href = stylePath;
            document.getElementsByTagName("head")[0].appendChild(link);
          }
 
          loadedStyles[stylePath] = true;
      });
    }
  };
});

//ref: http://www.sagarganatra.com/2014/08/lazy-loading-angularjs-components-using-providers.html
flowApp.service('lazyScript', ['$q', '$rootScope', function ($q, $rootScope) {
    this.loadScript = function(dependencies) {
        var deferred = $q.defer();

        require (dependencies, function () {
           $rootScope.$apply(function () {
                deferred.resolve();
           });
        });

        return deferred.promise;
        
    }
}]);