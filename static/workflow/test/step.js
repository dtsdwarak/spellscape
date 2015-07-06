 var app = angular.module('tree', ['wizardDirectives']);

app.controller('MainCtrl', function($scope, $timeout) {
    $scope.rootBranch = wrapDict(processDict);
    $scope.stepList = wrapList(bSteps);

    $scope.getBranchRange = function(step) {
      var noOfBranches = step.getList('Branches').length;
      console.info(noOfBranches)
      if (noOfBranches > 0) {
        //if count is 2 then span count is 2,if count 3 then it is 4, for 4 it is 6
        var spanCount = (noOfBranches * 2) - 2;
        if (spanCount >= 2) {
          //to draw the line we need half of the spanned count <td right top, and <td left top 
          return _.range(spanCount/2);
        }
      }
      return _.range(0);
    }
});

function StepController($scope) {
  
}

function BranchController($scope) {
    $scope.getBranchRange = function(step) {
      var noOfBranches = step.getList('Branches').length;
      console.info(noOfBranches)
      if (noOfBranches > 0) {
        //if count is 2 then span count is 2,if count 3 then it is 4, for 4 it is 6
        var spanCount = (noOfBranches * 2) - 2;
        if (spanCount >= 2) {
          //to draw the line we need half of the spanned count <td right top, and <td left top 
          return _.range(spanCount/2);
        }
      }
      return _.range(0);
    }
}

var wizardDirectives = angular.module('wizardDirectives', []);
wizardDirectives.directive('step', function($compile) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      "branch": "="
    },
    controller: StepController,
    templateUrl: function(elem, attr){
      return attr.src;
    },
    link: function(scope, elem, attr) {
      console.info("###### inside step ######");
      console.info(elem.get(0));
    }
  };
});

wizardDirectives.directive('branch', function($compile) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      "step": "="
    },
    controller: BranchController,
    templateUrl: function(elem, attr){
      return attr.src;
    },
    link: function(scope, elem, attr) {
      //to avoid recursion
      //elem.append("<step src='step.html' step='branchFirstStep'></step>");
      //$compile(elem.contents())(scope)
    }
  };
});

wizardDirectives.directive('nestedStep', function($compile) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      "branch": "="
    },
    link: function(scope, elem, attr) {
      console.info("$$$$$ inside nested step $$$$$");
      console.info(elem)

      var template = '<step src="step.html" branch="branch"></step>';
      var newElement = angular.element(template);
      $compile(newElement)(scope);
      elem.replaceWith(newElement);
    }
  };
});

wizardDirectives.directive('callback', function($timeout) {
  return {
    scope: {
      callbackFn: "&"
    },
    link: function(scope, elem, attrs) {
      $timeout(function(){
           //scope.callbackFn({width: elem[0].clientWidth});
           var totalWidth = 0;
           elem.children().each(function(i){
              totalWidth = totalWidth + $(this).width();
           })
           $("#tree").width(totalWidth+30);
      });
    }
  }
});

var bSteps = [
  {
    "Id": "Step001", 
    "Name": "Manager Approval", 
    "Type": "Approval", 
    "AssignedFor": "User", 
    "AssignedTo": "CreatedBy",
    "Index": 1
  }, 
  {
    "Id": "Step001.5", 
    "Name": "Manager Approval", 
    "Type": "Approval", 
    "AssignedFor": "User", 
    "AssignedTo": "CreatedBy",
    "Index": 2
  }, 
  {
    "Id": "Step002", 
    "Type": "Parallel",
    "Index": 3,
    "Branches": [
      {
        "Id": "Branch001", 
        "Name": "First Approval", 
        "Steps": [
          {
            "Id": "Step011", 
            "Name": "HR Approval", 
            "Type": "Approval", 
            "AssignedFor": "User", 
            "AssignedTo": "CreatedBy",
            "Index": 1
          },
          {
            "Id": "Step012", 
            "Name": "Onboarding Approval", 
            "Type": "Approval", 
            "AssignedFor": "User", 
            "AssignedTo": "CreatedBy",
            "Index": 2
          }
        ]
      }, 
      {
        "Id": "Branch002", 
        "Name": "Second Approval", 
        "Condition": "Amount > 10(need to write formula data structure)", 
        "Steps": [
          {
            "Id": "Step021", 
            "Name": "Manager Approval", 
            "Type": "Approval", 
            "AssignedFor": "User", 
            "AssignedTo": "CreatedBy",
            "Index": 1
          },
          {
            "Id": "Step022", 
            "Type": "Parallel", 
            "Index": 2,
            "Branches": [
              {
                "Id": "Branch021", 
                "Name": "First approval", 
                "Steps": [
                  {
                    "Id": "Step211", 
                    "Name": "HR Approval", 
                    "Type": "Approval", 
                    "AssignedFor": "User", 
                    "AssignedTo": "CreatedBy",
                    "Index": 1
                  },
                  {
                    "Id": "Step212", 
                    "Name": "Onboarding Approval", 
                    "Type": "Approval", 
                    "AssignedFor": "User", 
                    "AssignedTo": "CreatedBy",
                    "Index": 2
                  }
                ]
              }, 
              {
                "Id": "Branch022", 
                "Name": "Second approval", 
                "Condition": "Amount > 10(need to write formula data structure)", 
                "Steps": [
                  {
                    "Id": "Step221", 
                    "Name": "Manager Approval", 
                    "Type": "Approval", 
                    "AssignedFor": "User", 
                    "AssignedTo": "CreatedBy",
                    "Index": 1
                  }
                ]
              },
              {
                "Id": "Branch023", 
                "Name": "Third approval", 
                "Condition": "Amount > 10(need to write formula data structure)", 
                "Steps": [
                  {
                    "Id": "Step231", 
                    "Name": "Finance Approval", 
                    "Type": "Approval", 
                    "AssignedFor": "User", 
                    "AssignedTo": "CreatedBy",
                    "Index": 1
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "Id": "Branch003", 
        "Name": "Third approval", 
        "Condition": "Amount > 10(need to write formula data structure)", 
        "Steps": [
          {
            "Id": "Step031", 
            "Name": "Finance Approval", 
            "Type": "Approval", 
            "AssignedFor": "User", 
            "AssignedTo": "CreatedBy",
            "Index": 1
          }
        ]
      }
    ]
  },
  {
    "Id": "Step003", 
    "Name": "Test Approval", 
    "Type": "Approval", 
    "AssignedFor": "User", 
    "AssignedTo": "CreatedBy",
    "Index": 4
  },
]
var processDict  = {"Steps": bSteps};