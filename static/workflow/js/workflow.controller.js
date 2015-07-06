flowApp.controller('WorkflowController',['$scope','$window','workflowService', function($scope, $window, workflowService) {
    $scope.rootBranch = null;

    function init() {
      workflowService.getWorkflowData()
          .success(function(data) {
              $scope.rootBranch = wrapDict(data);
          })
          .error(function(error) {
              $scope.status = 'Unable to load workflow data: ' + error.message;
          });
    }
    init();

    $scope.getBranchRange = function(step) {
      var noOfBranches = step.getList('Branches').length;
      console.info(noOfBranches);
      if (noOfBranches > 0) {
        //if count is 2 then span count is 2,if count 3 then it is 4, for 4 it is 6
        //1 2 3 4 5... no of branche's
        //0 2 4 6 8... no of td's
        var spanCount = (noOfBranches * 2) - 2;
        if (spanCount >= 2) {
          //to draw the line we need half of the spanned count to construct <td right top, and <td left top 
          return _.range(spanCount/2);
        }
      }
      return _.range(0);
    }

    $scope.addStep = function(step) {
      if (step.getValue('Type') == 'Parallel') {
        $scope.addBranch(step);
      } else {
        var parentObj = step.getParent();
        var stepList = parentObj.getList("Steps", "Index");
        var nextStepList = getNextStepList(stepList, step.getValue("Id"));
        var nextIndex = step.getValue("Index") + 1;

        var newStep = parentObj.create("Steps");
        newStep.update("Index", nextIndex);

        //update index for next subsequent steps
        $scope.updateNextIndexes(nextStepList, nextIndex+1)
      }      
    }

    $scope.deleteStep = function(step) {
      var parentObj = step.getParent();
      var stepList = parentObj.getList("Steps", "Index");
      var nextStepList = getNextStepList(stepList, step.getValue("Id"));
      var currentIndex = step.getValue("Index");

      parentObj.delete("Steps", step.getValue('Id'));

      //update index for next subsequent steps
      $scope.updateNextIndexes(nextStepList, currentIndex)  
    }

    $scope.updateNextIndexes = function(nextStepList, nextIndex) {
        for(var i in nextStepList) {
          var nextStep = nextStepList[i];
          console.info(nextStep.getValue("Index")+" == "+nextIndex)
          nextStep.update("Index", nextIndex);
          nextIndex = nextIndex + 1;
        }
        //end step should be updated at the server side
    }

    $scope.addBranch = function(step){
        var branchList = step.getList("Branches", "Index");

        var newBranch = step.create("Branches");
        newBranch.update("Index", branchList.length+1);

        var newStep = newBranch.create("Steps");
        newStep.update("Index", 1);
    }

    $scope.deleteBranch = function(branch) {
        //deleting the branch should cascade delete all the steps in server
        var parentObj = branch.getParent();
        var branchList = parentObj.getList("Branches", "Index");
        var nextBranchList = getNextStepList(branchList, branch.getValue("Id"));

        var currentIndex = branch.getValue("Index");

        parentObj.delete("Branches", branch.getValue('Id'));

        //update index for next subsequent steps
        $scope.updateNextIndexes(nextBranchList, currentIndex)  
    }
 
}]);

function getNextStepList(stepList, afterId) {
  var listIndex = _.findIndex(stepList, function(obj) {
                return obj.getValue('Id') == afterId;
              });
  var nextStepList = [];
  if(listIndex > -1) {
    //update index for next subsequent steps
    nextStepList = _.slice(stepList, listIndex+1);
  }
  return nextStepList;
}