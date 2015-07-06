flowApp.service('formService', ['dataService', function (dataService) {

    var urlBase = 'form/test';

    this.getFormData = function () {
        return dataService.get(urlBase+'/wizard.json');
    };

}]);