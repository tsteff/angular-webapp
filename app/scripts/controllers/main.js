'use strict';

angular.module('angularWebApp')
  .controller('MainCtrl', function ($scope, Todo) {
    $scope.todos = [];
    $scope.todos = Todo.query();

    // can also be done like below if you want to manipulate the data first
    //Todo.query(function(data) {
    //  debugger;
    //  $scope.todos = data;
    //});

    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };

    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };

  });
