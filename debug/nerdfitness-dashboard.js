/*! nerdfitness-dashboard 2015-09-10 */
function mainController(a) {}

var mainModule = angular.module('nfdash.main', [ 'ngNewRouter' ]);

mainController.$routeConfig([ {
    path: '/',
    component: 'currentChallenge'
} ]), mainModule.controller('mainController', [ '$router', mainController ]);