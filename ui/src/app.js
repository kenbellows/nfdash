// see https://angular.github.io/router/getting-started

var mainModule = angular.module('nfdash.main', ['ngNewRouter']);

function mainController($router) {

}
mainController.$routeConfig([
  {path: '/', component: 'currentChallenge'}
]);
mainModule.controller('mainController', ['$router', mainController]);

