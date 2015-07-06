angular.module('filterDate', []).filter('dateOnly', function() {
    return function(widget) {
        return widget.getValue('Date') || widget.getValue('DateTime') ? true : false;
    };
});

angular.module('convertToArray', []).filter('toArray', function() {
    return function(obj) {
        if (!(obj instanceof Object)) return obj;
        return _.map(obj, function(val, key) {
            return Object.defineProperty(val, '$key', {
                __proto__: null,
                value: key
            });
        });
    }
});
