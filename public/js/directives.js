'use strict';

angular.module('mean.googleplace').directive('googleplace', function(gPlaces,gMaps) {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, model) {
            var options = {
                types: [],
                componentRestrictions: {}
            };
            scope.gPlace = new gPlaces.Autocomplete(element[0], options);
            console.log('hej');
            gMaps.event.addListener(scope.gPlace, 'place_changed', function() {
                scope.$apply(function() {
                    model.$setViewValue(element.val());
                });
            });
        }
    };
});