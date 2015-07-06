angular.module('filterDate', []).filter('dateOnly', function() {
    return function(widget) {
        var filtered = [];
        angular.forEach(widget, function(field) {
            if (field.getValue('Widget') == 'Date' || field.getValue('Widget') == 'Datetime') {
                filtered.push(field);
            }
        });
        return filtered;
    };
});
