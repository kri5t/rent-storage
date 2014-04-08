'use strict';

angular.module('mean', ['ngCookies', 'ngGPlaces', 'ngResource', 'ui.bootstrap', 'ui.router', 'mean.system', 'mean.articles', 'mean.rentals', 'mean.user', 'mean.booking']);
angular.module('mean.system', []);
angular.module('mean.articles', []);
angular.module('mean.rentals', []);
angular.module('mean.user', []);
angular.module('mean.booking', ['ui.bootstrap']);
angular.module('mean.googleplace', []);
angular.module('mean.googleplace').value('gPlaces', google.maps.places);
angular.module('mean.googleplace').value('gMaps', google.maps);