var app = angular.module('nikeStoreApp',[]);
    app.controller('carouselController', function($scope, $http) {
    	$http.get('http://www.raphaelfabeni.com.br/rv/data.json').
  			success(function(data) {
				$scope.response = data;
			})
			.error(function(data) {
                    alert(data);
                    console.log('Error: ' + data);
            });
     });