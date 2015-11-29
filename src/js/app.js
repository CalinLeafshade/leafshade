(function () {

    var app = angular.module('leafshade', ['markdown', 'ngResource', 'ngRoute', 'ngSanitize', 'angularMoment', 'ngAnimate']);

    app.config(['$routeProvider',
      function ($routeProvider) {
            $routeProvider.
            when('/posts', {
                templateUrl: 'partials/posts.html',
                controller: 'PostsController',
                controllerAs: 'vm'
            }).
            when('/posts/:postId', {
                templateUrl: 'partials/postdetail.html',
                controller: 'PostDetailController',
                controllerAs: 'vm'
            }).
            otherwise({
                redirectTo: '/posts'
            });
      }]);

    app.filter('cut', function () {
        return function (value, wordwise, max, tail) {
            if (!value) return '';

            max = parseInt(max, 10);
            if (!max) return value;
            if (value.length <= max) return value;

            value = value.substr(0, max);
            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace != -1) {
                    value = value.substr(0, lastspace);
                }
            }

            return value + (tail || ' …');
        };
    });

})();