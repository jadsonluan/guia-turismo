angular.module('your_app_name.filters', [])

.filter('rawHtml', function($sce){
  return function(val) {
    return $sce.trustAsHtml(val);
  };
})

.filter('parseDate', function() {
  return function(value) {
      return Date.parse(value);
  };
})

.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});

;
