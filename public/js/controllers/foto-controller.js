angular.module('alurapic').controller('FotosController', function($scope, $http){
  
  $scope.fotos = [];
  
  $http.get('v1/fotos').success(function(fotos){
    $scope.fotos = fotos;
  })
  .error(function(erro){
    console.log(erro);
  })

  // var promise = $http.get('v1/fotos');
  // promise.then(function(retorno){
  //   $scope.fotos = retorno.data;
  // })
  // .catch(function(error){
  //   console.log(error);
  // })
  
  
  // $scope.fotos = [
  //   {
  //     titulo: 'Brisbane',
  //     url: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcT_zYvOoilttGR4k5W2vVmaUEHkE7KkC_5h2Icxd6D3oTXwFOTALw%26s&sp=1591931521T2d4a2f34426c1eadd6dc38f61179079a065e269b2da14ad73cef568f64806155'
  //   },
  //   {
  //     titulo: 'Byron Bay',
  //     url: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcT_lE5j4fQY2smqw1Z1oVgO1ytu0qPPofkEqeLRUzi6jseW_xgo%26s&sp=1591931944T6ddd314c8b34d7472df16a9a79be4c7d039a93e66d9d603aca23dddea1df4127'
  //   },
  //   {
  //     titulo: 'Gold Coast',
  //     url: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQZAwZmLx1qXfMdrCDqsQ4ZzZtaPJ3hCaYkqVIuHYrDw7GpW65v%26s&sp=1591931597T1d8bc597821058641dd6d22e967634f97a128870d2b81c65dc27b001eb418bd4'
  //   },
  //   {
  //     titulo: 'Sidney',
  //     url: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcT9KSzCbHgmQfntOQAVpnBzq9w6B_P1hATsqBDBJIcTrwKmOOyC%26s&sp=1591931675T3f44ca79b14b5fa6c9376e6ff1bf38e3fc80474321adf6b4d9d7015d80f1a18d'
  //   }
  // ];
}); 