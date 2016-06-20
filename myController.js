(function() {
  'use strict';
	angular
		.module('spicyApp1', [])
		.controller('SpicyController', ['$http','$q',SpicyController])
		.config(['$httpProvider',function($httpProvider){
		  $httpProvider.defaults.cache = true;
		//	$httpProvider.defaults.headers.get = {};
			$httpProvider.interceptors.push(function($q){
			  return{
			    'request':function(config){
			      console.log(config);
			      return config;
			    },
			    'response':function(response){
			      console.log(response);
			       return response;
			    }
			  }
			})
		}])
	
	function SpicyController($http,$q) {
		
	/*	$http({method:'GET',
			   url:'http://127.0.0.1:31999/New%20folder/response.json'}
			   ).then(function(response){
				//	console.log(response);
			   }).then(function(error){
				   console.log(error);
			   })*/
		
		/*function qServiceDemo(name){
		  return $q(function(resolve,reject){
		    setTimeout(function(){
		      if(name=="kushagra"){
		        resolve("resolved");
		      }else{
		        reject("rejected");
		      }
		    },1000);
		  });
		}*/
		
		
		function qServiceDemo(name){
		  var deffered = $q.defer();
		  
	  	$http({method:'GET',
		   url:'http://127.0.0.1:31999/New%20folder/response.json'}
		   )
		   .success(function(data,status){
		     deffered.resolve(data);
		   })
		   .error(function(data,status){
		     deffered.reject(status);
		   });
		  
		 /* setTimeout(function(){
		    deffered.notify('notify'+name);
		     if(name=="kushagra"){
		        deffered.resolve("resolved");
		      }else{
		        deffered.reject("rejected");
		      }
		  },1000);*/
		  return deffered.promise;
		}
		
		var promise = qServiceDemo("kushagraR");
		
    var promise2 =  promise.then(function(greeting) {
              alert('Success: ' + greeting.name);
            }, function(reason) {
              alert('Failed: ' + reason);
            }, function(update) {
              alert('Got notification: ' + update);
            });
            
    promise2.then(function(data){
     // console.log("promise2 resolved");
    })        
			   
		var vm = this;
		vm.name = "kushagra";
	}
})();
