'use strict';

angular.module("angularWebApp.services", ["ngResource"]).factory('Todo', function ($resource) {
  return $resource('http://localhost:8080/todos/:id', {id: '@id'}, {
    update: {
      method: 'PUT'
    }
  });
});

