(function() {
  'use strict';
	angular
		.module('spicyApp1', [])
		.config(['$httpProvider',function($httpProvider){
			$httpProvider.defaults.headers.get = {};
		}]);
})();
