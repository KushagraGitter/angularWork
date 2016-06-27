(function() {
  'use strict';
  
  
  	function SpicyController($http,$q) {
	  var vm = this;
		vm.name = "kushagra";
		vm.format = 'M/d/yy h:mm:ss a';
		vm.kushagra = {
		  name:'kushagra',
		  address:'A16 202 - Megapolis sunway'
		}
		vm.sunny={
		  name:'Sunny',
		  address:'119 G indrapuram ghazibad'
		}
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
		   url:'http://127.0.0.1:31999/angularWork/response.json'}
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
			   
	
	}
  
	angular
		.module('spicyApp1', [])
		.controller('SpicyController', ['$http','$q',SpicyController])
		.config(['$httpProvider',function($httpProvider){
		  $httpProvider.defaults.cache = true;
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
			  };
			});
		}])
		.directive('myDirective',function(){
      return {
        restrict:'E',
        scope:{
          customerInfo:'=info'
        },
        templateUrl:'my-customer.html'
      } 
    })
    .directive('myCurrentTime',['$interval','dateFilter',function($interval,dateFilter){
        function link(scope,element,attrs){
          var format,timeoutId;
          
          function updateTime(){
            element.text(dateFilter(new Date(), format));
          }
          
          scope.$watch(attrs.mycurrentTime, function(value){
            format = value;
            updateTime();
          });
          
          element.on('$destroy',function(){
            $intervalCancle(timeoutId);
          });
          
          timeoutId = $interval(function(){
            updateTime();
          },1000);
          
        }
        
        return {link:link};
    }]);

})();
