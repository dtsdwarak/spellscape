var json={};
for ( var i = 0, len = localStorage.length; i < len; ++i ) {
	json[localStorage.key(i)]=localStorage.getItem(localStorage.key(i));
}
angular.module('flowApp').run(['gettextCatalog', function (gettextCatalog) {
    gettextCatalog.setStrings('fr',json);
}]);
