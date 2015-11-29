(function () {

    var app = angular.module('leafshade');

    app.controller('NavController', NavController);

    NavController.$inject = ['$routeParams'];

    function NavController($routeParams) {

        var vm = this;
        vm.expanded = false;

    }


})();