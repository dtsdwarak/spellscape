flowApp.service('workflowService', ['dataService', function (dataService) {

    var urlBase = 'workflow/test';

    this.getWizardData = function () {
        return dataService.get(urlBase+'/wizard.test.json');
    };
    
    this.getWorkflowData = function (model_id) {
        return dataService.get(urlBase+'/wizard.workflow.json');
    };
    
}]);