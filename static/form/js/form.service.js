flowApp.service('formService', ['dataService', function (dataService) {

    var urlBase = 'form/test';

    this.getFormData = function () {
        return dataService.get(urlBase+'/wizard.json');
    };
    this.getFieldList = function (model_id) {
        return dataService.get(urlBase+'/wizard.field.json');
    };
    this.getProcessList = function () {
        return dataService.get(urlBase+'/wizard.model.json');
    };

}]);