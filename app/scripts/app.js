var app = angular.module('itauInsightsApp',['ui.bootstrap']);

app.controller('myController', function($scope, $http) {
  $scope.count = 0;

  $scope.erroApi = false;

  $scope.callApi = function(){
    // Colocar o apikey no header
    console.log("oieee");
    $http.defaults.headers.common['keyid'] = '34604657-21db-455f-a8b9-6d0a2590cfe3';

    // Chamar a API: guardar o resultado no objeto myIndexes
    $http({
      method: 'GET',
      url: 'https://api-insights.axwaycloud.com/investimentos/v1/indicadores'
    }).then (
      function successCallback(response) {
        console.log(response.data);
        $scope.myIndexes = response.data;
      }, 
      function errorCallback(response) {
        $scope.erroApi = true;
    });

  }
 
/*
  dataService.getData().then(function(data) {
    

    }).catch(function(errorResponse) {
         console.log('oopsie', errorResponse);
  });*/

});

/*
app.service('dataService', ['$http', function($http) {
  this.getData = function() {
    return $http({
      method: 'GET',
      url: 'http://www.raphaelfabeni.com.br/rv/data.json'
    }).then (
      function mySuccess(response) {
        console.log("inside service")
        console.log(response.data)
        return response.data;
      }, 
      function myError(response) {
        return response.statusText;
    });
  }
}]);
*/
