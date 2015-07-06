//Angular Application with GetText Dependency

/*
var app=angular.module("flowApp",['gettext']);

app.run(function (gettextCatalog) {
    gettextCatalog.setCurrentLanguage('en');
});
*/


flowApp.controller('dataProcessControl',function data_process_control($scope,gettextCatalog){
	$scope.languages = {
	    current: gettextCatalog.currentLanguage,
	    available: {
	    'fr': 'French',
	    'en': 'English'
	    }
	};

	$scope.$watch('languages.current', function (lang) {
	    if (!lang) {
	        return;
	    }
	    gettextCatalog.setCurrentLanguage(lang);
	});

	//Procedure to update language
	$scope.updateLanguage = function(mapVal) {
		gettextCatalog.setStrings($scope.languages.current, mapVal);
		//angular.element('select').scope().updateLanguage({"About":"à propos123345"})
	};

	//To get current page language
	$scope.getCurrentLanguage = function(){
		console.log(gettextCatalog.currentLanguage);
	}

});

function changeAngularLanguage(){
    //Changing the angular app language to set language
    console.log('Language changed!');
    //angular.element('select').scope().setPageLanguage(document.getElementById("langSelect").value.substr(7,9));
    angular.element('select').scope().languages.current=document.getElementById("langSelect").value.substr(7,9);
}


