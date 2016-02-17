app.controller('mainCtrl', function($scope, theService) {
  $scope.quotes = theService.getData();
  $scope.addQuote = function() {
    var obj = {text: $scope.quoteName, author: $scope.quoteAuthor};
    theService.addData(obj);
  }
  $scope.remove = function(str) {
    var text = str
    theService.removeData(text);
  }
  $scope.changeFilter = function(words) {
    $scope.thisText = words;
    }
});
