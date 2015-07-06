describe('FormController',function(){

	beforeEach(module('flowApp'));

	var $controller, $scope, formCtrl;

	var getCallBack = function(){
		return {
    		success: function(callback){ 
    			callback({things: 'and stuff'})
    			return getCallBack();
    		},
    		error: function(callback){ 
    			callback({msg: 'error'})
    			return getCallBack();
    		}
        };
	}

	beforeEach(inject(function(_$controller_,formService){
		$controller = _$controller_;
		$scope = {};
		spyOn(formService,'getFormData').andCallFake(function(){
			return getCallBack;
		});
	formCtrl = $controller('FormController',{$scope:$scope,formService: formService});
	}));

});