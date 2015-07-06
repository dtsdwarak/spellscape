var wizardDirectives = angular.module('wizardDirectives', []);

wizardDirectives.directive('kfSortable', function() {
    return {
        link: function(scope, el, attrs) {
            var sortType = attrs.type;
            var sectionId = attrs.id;
            var options = {};
            ///using the same code for table and section
            options['placeholder'] = (sortType && sortType == 'horizontal') ? 'drop-horizontal' : 'drop-highlight';
            options['dropOnEmpty'] = true;
            el.sortable(options);
            el.disableSelection();
            el.on("sortupdate", function(event, ui) {
                var children = el.children();
                var to = children.index(ui.item);
                var newIndex = 0;
                //the logic to calculate the index when a field is dropped. Get the previous
                //and the next field indexes, add them and divide them by 2. 
                //for example, if the index of the previous field is 2 and the next field is 3,
                //the index of the new field which is dropped between 2 and 3 is 2.5
                if (to > 0) {
                    var prevObjIndex = angular.element(children[to - 1]).scope().field.getValue("Index");
                    var newIndex = children.length;
                    if (children.length > to + 1) {
                        var nextObjIndex = angular.element(children[to + 1]).scope().field.getValue("Index");
                        newIndex = (prevObjIndex + nextObjIndex) / 2;
                    }
                }
                var draggedObjectType = null;
                var draggedField = ui.item.data('id');
                console.info(draggedField);
                if (!draggedField) {
                    draggedObjectType = ui.item.children('.field-type').attr('id');
                }
                //logic for new field index ends
                scope.$apply(function() {
                    var section = scope.tableSection || scope.section;
                    if (draggedObjectType)
                        scope.addField(draggedObjectType, newIndex, section);
                    else
                        scope.updateField(angular.element(ui.item).scope().field, newIndex, section);
                })
                ui.item.remove();
            });
        }
    }
});

wizardDirectives.directive('kfDraggable', function() {
    return {
        link: function(scope, el, attrs) {
            el.draggable({
                connectToSortable: attrs.kfDraggable,
                helper: "clone",
                revert: "invalid"
            });
            el.disableSelection();
        }
    }
});

wizardDirectives.directive("select", ["$compile", "$timeout", function($compile, $timeout) {
    return {
        link: function(scope, element, attrs) {
            scope.$watch(attrs.dynamic, function(html) {
                if (element.is("select")) {
                    $compile(element.contents())(scope);
                    $timeout(function() {
                        element.material_select();
                    });
                }
            });
        }
    };
}]);

wizardDirectives.directive('pushpin', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            $(element).pushpin({
                top: $('.form-container').offset().top
            });
        }
    };
});

wizardDirectives.directive('formula', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            attachFormulaParser(element.attr('id'), scope);
        }
    }
});


wizardDirectives.directive('flowInclude', function() {
    return {
        restrict: 'E',
        templateUrl: function(elem, attr) {
            return attr.url;
        }
    };
});

wizardDirectives
    .directive('flowPrivateInclude', function(RecursionHelper) {
        return {
            restrict: 'E',
            scope: {
                steps: '=',
                fullWidth: '@'
            },
            templateUrl: function(elem, attr) {
                return attr.url;
            },
            compile: function(element) {
                return RecursionHelper.compile(element, function(scope, iElement, iAttrs, controller, transcludeFn) {
                    scope.showBranch = function(branchId) {
                            scope.currentBranch = branchId;
                            $('.background').show();
                        },
                        scope.showAdvancedProp = function(activityId) {
                            scope.currentActivity = activityId;
                        },
                        scope.toggleActions = function(activityId) {
                            $('.tooltipped').tooltip({
                                "delay": 50
                            });
                            $('.' + activityId + 'Actions').show(50, 'swing');
                            $('.' + activityId + 'AddStep').animate({
                                borderSpacing: -45
                            }, {
                                step: function(now, fx) {
                                    $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                                    $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                                    $(this).css('transform', 'rotate(' + now + 'deg)');
                                },
                                duration: 'medium'
                            }, 'linear');
                        }
                });
            }
        };

    });
