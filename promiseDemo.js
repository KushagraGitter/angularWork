 var p1 = new Promise(function(resolve,reject){
    setTimeout(function(){
     resolve("promiseResolve");
    },Math.random()*1000+2000);
  });

  p1.then(function(val){
    console.log(val);
  })
  .catch(function(reason){
    console.log(reason);
  })