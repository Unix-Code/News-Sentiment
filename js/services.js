angular.module('NewsSentiment.services', []).
  factory('newsAPIService', ['$http', function($http) {
    var newsAPI = {};
    var apiKey = '01fb5f4f2558493bab0fd6ad1dd0d293'
    newsAPI.getNewsData = function() {
      return $http.get('https://newsapi.org/v2/top-headlines?language=en&country=us&apiKey=' + apiKey);
    };

    return newsAPI;
  }])
  .factory('sentimentAPIService', ['$http', function($http) {
    var sentimentAPI = {};
    var apiKey = 'a0fb001e73d90238c232cac782678907';
    sentimentAPI.getSentimentAnalysisData = function(data) {
      return $http.post('https://apiv2.indico.io/sentimenthq/batch',
        JSON.stringify({
          'api_key': apiKey,
          'data': data
        })
      );
    };

    return sentimentAPI;
  }]);
