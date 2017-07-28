var app = angular.module('nikeStoreApp',['ui.bootstrap']);

app.controller('carouselController', function($scope, dataService) {
  $scope.myInterval = 2000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];  
  var currIndex = 0;
  var items = [];

  $scope.addSlide = function(items, i) {
    console.log(items)
    console.log(i)

    slides.push({
      'image1': items[i].image,
      'title1': items[i].title,
      'price1': items[i].price,
      'installments1': items[i].installments,
      'high-top1': items[i]["high-top"],
      'category1': items[i].category,
      'image2': items[i + 1].image,
      'title2': items[i + 1].title,
      'price2': items[i + 1].price,
      'installments2': items[i + 1].installments,
      'high-top2': items[i + 1]["high-top"],
      'category2': items[i + 1].category,
      'image3': items[i + 2].image,
      'title3': items[i + 2].title,
      'price3': items[i + 2].price,
      'installments3': items[i + 2].installments,
      'high-top3': items[i + 2]["high-top"],
      'category3': items[i + 2].category,
      'image4': items[i + 3].image,
      'title4': items[i + 3].title,
      'price4': items[i + 3].price,
      'installments4': items[i + 3].installments,
      'high-top4': items[i + 3]["high-top"],
      'category4': items[i + 3].category,
      'id': currIndex++
    });
  };


  dataService.getData().then(function(data) {
    items = data;
    console.log(items);
    for (var i = 0; i < 4; i++) {
      $scope.addSlide(items["best-sellers"], i);
    }

    }).catch(function(errorResponse) {
         console.log('oopsie', errorResponse);
  });

});

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

