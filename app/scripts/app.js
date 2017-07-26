var app = angular.module('nikeStoreApp',['ui.bootstrap']);
app.controller('carouselController', function($scope, $http) {
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = [];
    
    
        $http.get('http://www.raphaelfabeni.com.br/rv/data.json')
            .success(function(data) {
                slides = $scope.slides = data;
                console.log(data["best-sellers"][1].image);
            })
           .error(function(data) {
                alert(data);
                console.log('Error: ' + data);
            });


    
});