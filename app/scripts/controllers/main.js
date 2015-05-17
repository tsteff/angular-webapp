'use strict';

angular.module('angularWebApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('http://localhost:8080/todos').success(function(data) {
      debugger;
      $scope.todos = data;
    });
    $scope.todos = [];

    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };

  });
