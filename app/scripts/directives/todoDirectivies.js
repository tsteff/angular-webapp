'use strict';

angular.module('angularWebApp.directives', [])
  .directive('todoTag', function() {
    return {
      restrict: 'E',
      scope: {
        todo: '=todo'
      },
      templateUrl: 'views/sections/todoItem.html'
    };
  });
