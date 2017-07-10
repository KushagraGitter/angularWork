(function(){

   var passwordObj = new Password($('#password'));

    $('#submit').on("click", function(event){
        event.preventDefault();
       // checkPassword();
        return false;
    });

    passwordObj.passwordElement.keyup(function(e){
        passwordObj.passwordValue = passwordObj.passwordElement.val();
        passwordObj.checkStrength();
    });

    passwordObj.passwordElement.blur(function(){
        passwordObj.isValidPassword();
    });
    
})();