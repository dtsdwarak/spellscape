flowApp.controller('PermissionsController', ['$scope', 'formService', function($scope, formService) {
   
    $scope.formData = null;
    init();
   
    function init() {
        loadFormData();
    }
   
    function loadFormData() {
        formService.getFormData()
            .success(function (data) {
                $scope.formData = wrapDict(data);
            })
            .error(function (error) {
                $scope.status = 'Unable to load form data: ' + error.message;
            });    
    }
   
}]);