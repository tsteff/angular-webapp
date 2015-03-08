'use strict';

/**
 * @ngdoc function
 * @name angularWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWebApp
 */
angular.module('angularWebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [];

    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };

  });
