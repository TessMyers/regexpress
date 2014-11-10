(function() {
  'use strict';

  angular
    .module('baseApp', [
      'makeRailroad'
     ])

    .controller('MainController', [ '$scope', 'createRailroad','$sce', MainController ]);

    function MainController($scope, createRailroad, $sce) {
      $scope.string = '';
      $scope.regexBody = '';
      $scope.regexTags = '';
      $scope.regex = '';
      $scope.match = '';
      $scope.railroad = '';

      $scope.$watch('regexBody', function(newVal, oldVal){
        try {
          $scope.regex = new RegExp(newVal);
        } catch (err) {
          $scope.regex = oldVal;
        }
        console.log($scope.regex)
      })

      // triggered when user clicks submit button
      $scope.submitRegex = function(){

        // takes in user's regex and sets $scope.railroad to the railroad diagram for that regex
        var newRR = createRailroad.RR($scope.regexBody, $scope.regexTags);
        $scope.railroad = $sce.trustAsHtml(newRR.toString());

        // update match string through test-string directive TODO

        // display railroad diagram through railroad directive
        //$scope.displayRailroad();

      }

    };

})();