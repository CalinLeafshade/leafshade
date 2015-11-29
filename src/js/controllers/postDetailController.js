(function () {

    var app = angular.module('leafshade');

    app.controller('PostDetailController', PostDetailController);

    PostDetailController.$inject = ['Posts', '$routeParams'];

    function PostDetailController(Posts, $routeParams) {

        var vm = this;
        vm.loaded = false;
        vm.post = Posts.get({
            postId: $routeParams.postId
        }, function () {
            vm.loaded = true;
        });

    }


})();