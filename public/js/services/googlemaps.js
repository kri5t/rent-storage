'use strict';

angular.module('mean.helpers').service('GoogleMapHelpers', function() {
    this.getDataElementsFromComponents = function (place) {
        var city = '';
        var region = '';
        var country = '';
        for (var i=0; i<place.address_components.length; i++)
        {
            if (place.address_components[i].types[0] === 'locality') {
                //this is the object you are looking for
                city = place.address_components[i].long_name;
            }
            if (place.address_components[i].types[0] === 'administrative_area_level_1') {
                //this is the object you are looking for
                region = place.address_components[i].long_name;
            }
            if (place.address_components[i].types[0] === 'country') {
                //this is the object you are looking for
                country = place.address_components[i].long_name;
            }
        }
        var mapElements = [city,region,country];
        return mapElements;
    };
});