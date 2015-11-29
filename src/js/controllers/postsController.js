(function () {

    var app = angular.module('leafshade');

    app.controller('PostsController', PostsController);

    PostsController.$inject = ['Posts'];

    function PostsController(Posts) {

        var vm = this;
        vm.posts = Posts.query();
        vm.selected = null;
        vm.left = false;
        vm.hover = function (i) {
            if (i > -1) {
                vm.selected = vm.posts[i];
                vm.left = (i % 4) < 2;
            } else {
                vm.selected = null;
            }
        }

    }


})();