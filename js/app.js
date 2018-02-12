angular.module('NewsSentiment', [
  'NewsSentiment.controllers',
  'NewsSentiment.services'
])
.config(function($httpProvider){
  $httpProvider.defaults.headers.post['Content-Type'] = 'text/plain'
});
