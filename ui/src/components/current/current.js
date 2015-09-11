angular.module('nfdash.current', [])
.controller('CurrentController', ['$moment', function($moment) {
  this.challenge = {
    startDate: '2015-09-14',
    endDate: '2015-10-26',
  };
  this.dateRange = function() {
    return (
      $moment(this.challenge.startDate).format('dddd MMMM D') +
      ' - ' +
      $moment(this.challenge.endDate).format('dddd MMMM D')
    );
  };
}]);
