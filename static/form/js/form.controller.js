flowApp.controller('FormController', ['$rootScope', '$scope', 'formService', function($rootScope, $scope, formService) {

    $scope.formData = null;
    $scope.sections = null;
    $scope.selectedParam = null;
    $scope.advancedProps = false;
    $scope.selectedSection = null;
    $scope.fieldList = {};
    $scope.selectedFieldList = {};
    $scope.processList = null;
    $scope.isFormula = false;
    $scope.showFieldTypes=false;
    $scope.toBeDeleted = null;
    $scope.fieldTypes = [
        [{
            'name': 'Text',
            'class': 'Singleline'
        }, {
            'name': 'Textarea',
            'class': 'Multiline'
        }],
        [{
            'name': 'Number',
            'class': 'Number'
        }, {
            'name': 'Currency',
            'class': 'Currency'
        }],
        [{
            'name': 'Date',
            'class': 'Date'
        }, {
            'name': 'Date & Time',
            'class': 'Datetime'
        }],
        [{
            'name': 'Users',
            'class': 'Users'
        }, {
            'name': 'Dropdown',
            'class': 'Dropdown'
        }],
        [{
            'name': 'Yes/No',
            'class': 'Yesno'
        }, {
            'name': 'Attachment',
            'class': 'Attachment'
        }],
        [{
            'name': 'Lookup',
            'class': 'Lookup'
        }, {
            'name': 'Masters',
            'class': 'Masters'
        }]
    ]

    $scope.validations = {
        'Text': ['Numeric', 'Alpha Numeric'],
        'Number': ['Greater than', 'Less than', 'Greater than or Equal to', 'Less than or Equal to', 'Equal to'],
        'Date': ['In the past', 'In the Future', 'After the date', 'Before the date', 'Equal to']
    }

    $scope.getFieldTypes = function() {
        return _.flatten($scope.fieldTypes);
    }

    $scope.getValidation = function() {
        var widget = $scope.selectedParam.getValue('Widget');
        if (widget == 'Singleline' || widget == 'Multiline' || widget == 'Dropdown')
            return $scope.validations['Text'];
        else if (widget == 'Number' || widget == 'Currency')
            return $scope.validations['Number'];
        else if (widget == 'Date' || widget == 'Datetime')
            return $scope.validations['Date'];
        else
            return [];
    }

    init();

    function init() {
        loadFormData();
        getProcessList();
    }

    $scope.refreshData = function() {
        loadFormData();
    }

    $scope.setSelectedSection = function(section) {
        $scope.selectedSection = section;
    }

    $scope.getSelectedSection = function() {
        return $scope.selectedSection || $scope.formData.getList('Form')[0];
    }

    $scope.showDeleteConfirmation = function(field, $event) {
        $scope.toBeDeleted = field?field.getValue('Id'):null;
        if ($event.stopPropagation) $event.stopPropagation();
        if ($event.preventDefault) $event.preventDefault();
        $event.cancelBubble = true;
        $event.returnValue = false;
    }

    $scope.copyField = function(field)
    {

    }

    $scope.deleteField = function(field, section) {
        section.delete('Fields', field.getValue("Id"));
    }

    $scope.setSelectedParam = function(field) {
        //check whether all properties are set properly
        if ($scope.selectedParam) {
            var validations = $scope.selectedParam.getList('Validations');
            for (index in validations) {
                var validation = validations[index];
                if (validation.getValue('Operator') == null) {
                    return false;
                }
                if (validation.getValue('RHSType') == 'Field' && !validation.getValue('RHS')) {
                    return false;
                }
                if (validation.getValue('RHSType') == 'Value' && !validation.getValue('RHS')) {
                    return false;
                }
            }
        }
        if (!field) {
            $scope.selectedParam = null;
            return;
        }
        //end of check
        $scope.advancedProps = false;
        if (!field.getValue('Formula'))
            $scope.isFormula = false;
        $scope.selectedParam = field;
        var id = field.getValue("Id");
    }

    $scope.isInvalid = function(attr) {
        return $scope.selectedParam.getValue(attr) == null;
    }

    //this method defined to get all the fields across sections which can be used to validate field name and in formula
    $scope.getAllFields = function(table) {
        var allSections = {};
        if (table) {
            var selectedTable = _.find($scope.formData.getList('Form'), function(n) {
                return n.getValue('Id') == table
            });
            allSections = selectedTable.getList('Form');
        } else
            allSections = $scope.formData.getList('Form');
        var allFields = {};
        for (section in allSections) {
            if (allSections[section].getValue('Type') == 'Section') {
                allFields = _.union(allFields, allSections[section].getList('Fields'));
            }
        }
        return allFields;
    }

    $scope.isDuplicate = function() {
        var fieldName = $scope.selectedParam.getValue("Name");
        var allFields = $scope.getAllFields();
        var isFound = _.find(allFields, function(n) {
            return n.getValue('Name') == fieldName && n.getValue('Id') != $scope.selectedParam.getValue('Id');
        });
        if (isFound) {
            $('.field-name-info').show().delay(3000).fadeOut();
            $scope.selectedParam.update('Name', $scope.selectedParam.getValue('Name') + "_");
            $scope.isDuplicate();
        }
    }

    //check the datatype of default value. The user shouldn't enter string for number type field.
    $scope.checkDefaultValue = (function() {
        return {
            test: function(value) {
                var regexp = null;
                var type = $scope.selectedParam.getValue('Widget');
                if (type == 'Number' || type == 'Currency')
                    regexp = /^\d+$/;
                else if (type == 'Date' || type == 'Datetime')
                    regexp = /^\d+$/;
                if (!regexp) {
                    return true;
                }
                return regexp.test(value);
            }
        };
    })();

    $scope.addSection = function(currentSection, nextSection,isTable) {
        var currentIndex = currentSection.getValue('Index');
        var newIndex = null;
        if (!nextSection)
            newIndex = currentIndex + 1;
        else {
            var nextIndex = nextSection.getValue('Index');
            newIndex = (currentIndex + nextIndex) / 2;
        }

        var index = currentSection.getValue('Index');
        var newSection = $scope.formData.create("Form");
        var type=isTable?'Table':'Section';
        newSection.update("Type", type);
        newSection.update("Name", 'Untitled '+type);
        newSection.update("Hints", 'Click here to enter hints');
        newSection.update("Index", newIndex);
        if(type=='Table')
        {
            //add default section to the table. this is only to support older forms with multiple sections in table.
            var section = newSection.create("Form");
            section.update("Index", 0);
            section.update("Type", 'Section');
            section.update("Name", 'Untitled Section');
            section.update("Hints", 'Click here to enter hints');
        }
    }

    $scope.setFieldAsFormula = function(object, event) {
        if (event.target.checked) {
            $scope.isFormula = true;
        } else {
            $scope.isFormula = false;
        }
    }

    $scope.moveSectionDown = function(currentSection,nextSection)
    {
        var nextSectionIndex=nextSection.getValue('Index');
        currentSection.update('Index',nextSectionIndex);
        nextSection.update('Index',nextSectionIndex-1);
    }

    $scope.moveSectionUp = function(currentSection,prevSection)
    {
        var prevSectionIndex=prevSection.getValue('Index');
        currentSection.update('Index',prevSectionIndex);
        prevSection.update('Index',prevSectionIndex+1);
    }

    $scope.addValidation = function() {
        var validation = $scope.selectedParam.create("Validations");
        var validationType = $scope.getValidation();
        validation.update('Operator', validationType[0]);
        if (_.indexOf(['Greater than', 'Less than', 'Greater than or Equal to', 'Less than or Equal to',
                'Equal to', 'After the date', 'Before the date', 'Equal to'
            ], validationType[0]) >= 0) {
            validation.update('RHSType', 'Field');
        }
    }

    $scope.deleteValidation = function(id) {
        $scope.selectedParam.delete('Validations', id);
    }

    $scope.addCriteria = function() {
        $scope.selectedParam.create("Criteria");
    }

    $scope.deleteCriteria = function(id) {
        $scope.selectedParam.delete('Criteria', id);
    }

    $scope.updateRHSValue = function(validation) {
        validation.update('RHS', '')
    }

    $scope.getFieldList = function() {
        return $scope.getSelectedSection().getList('Fields');
    }

    $scope.addField = function(fieldType, index, section) {
        //section
        if (section) {
            $scope.setSelectedSection(section);
        }
        var selectedSection = $scope.getSelectedSection()
        var field = selectedSection.create("Fields");
        field.update("Widget", fieldType);
        field.update("Label", 'Untitled');
        field.update("Name", 'Untitled');
        if (index)
            field.update("Index", index);
        else {
            field.update("Index", selectedSection.getList('Fields').length);
        }
        //$scope.setSelectedParam(field.getValue('Id'));
    }

    $scope.updateFieldLabel = function() {
        var label = $scope.selectedParam.getValue('Label');
        var fieldName = removeDiacritics(label);
        $scope.selectedParam.update("Name", fieldName);
        $scope.isDuplicate();
    }

    $scope.updateField = function(field, index, section) {
        //section
        if (section) {
            $scope.setSelectedSection(section);
        }
        var selectedSection = $scope.getSelectedSection()
        if (index)
            field.update("Index", index);
    }

    $scope.toggleAdvancedProps = function() {
        $scope.advancedProps = $scope.advancedProps ? false : true;
    }

    $scope.getFields = function(modelId) {
        //if the model is already loaded return all the fields.
        if ($scope.fieldList[modelId])
            $scope.selectedFieldList = $scope.fieldList[modelId];
        //fetch all the fields for the model from form service.
        formService.getFieldList(modelId)
            .success(function(data) {
                $scope.selectedFieldList = data;
                $scope.fieldList[modelId] = data;
            })
            .error(function(error) {
                $scope.status = 'Unable to load fields list: ' + error.message;
            });
    }

    function loadFormData() {
        formService.getFormData()
            .success(function(data) {
                $scope.formData = wrapDict(data);
            })
            .error(function(error) {
                $scope.status = 'Unable to load form data: ' + error.message;
            });
    }

    function getProcessList() {
        formService.getProcessList()
            .success(function(data) {
                $scope.processList = data['Master'].concat(data['Process']).concat(data['System']);
            })
            .error(function(error) {
                $scope.status = 'Unable to load process list: ' + error.message;
            });
    }

    $scope.getSections = function() {
        return $scope.formData.getList('Form');
    }
}]);
