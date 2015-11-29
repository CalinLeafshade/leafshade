(function () {

    var app = angular.module('leafshade');
    app.factory('Posts', ['$resource', function ($resource) {
        return $resource('/api/v1/posts/:postId', {
            userId: '@id'
        });
    }]);

})();