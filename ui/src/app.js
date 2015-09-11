// see https://angular.github.io/router/getting-started

var mainModule = angular.module('nfdash.main', ['ngNewRouter','angular-momentjs','nfdash.current']);
mainModule.config(['$momentProvider', function($moment) {
  $moment
    .asyncLoading(false)
    .scriptUrl('//cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment.min.js');
}]);

function mainController($router) {
  $router.config([
    {path: '/', component: 'current'}
  ]);
}
mainModule.controller('mainController', ['$router', mainController]);

