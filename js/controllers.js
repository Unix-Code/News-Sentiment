angular.module('NewsSentiment.controllers', []).
controller('mainController', ['$scope', '$interval', 'newsAPIService', 'sentimentAPIService', function($scope, $interval, newsAPIService, sentimentAPIService) {
  $scope.newsEmotionData = {};
  var formatNewsData = function(response) {
    var articles = response.data.articles;
    var sentences = articles.map(article => article.title);
    console.log(sentences)
    return sentences.filter(x => x);
  };

  $scope.getSentimentData = function() {
    newsAPIService.getNewsData().then(function(response) {
      sentimentAPIService.getSentimentAnalysisData(formatNewsData(response)).then(function(response) {
        var sentimentResults = response.data.results
        var total = sentimentResults.reduce((a, b) => a + b);
        $scope.newsSentimentData = (total / sentimentResults.length).toPrecision(3);
      });
    });
  };

  $interval($scope.getSentimentData, 120000);

}]);
