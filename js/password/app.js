(function(){

   var passwordObj = new Password($('#password'));
   var prevClass = ''
    $('#submit').on("click", function(event){
        event.preventDefault();
       // checkPassword();
        return false;
    });

    passwordObj.passwordElement.keyup(function(e){
        passwordObj.passwordValue = passwordObj.passwordElement.val();
        var strength = passwordObj.checkStrength();
          $('#strengthLabel').removeClass('strengthLabel');
        if(prevClass !== undefined && prevClass!=='' && prevClass !== strength.color){
            $('#strengthLabel').removeClass(prevClass);
        }
        $('#strengthLabel').addClass(strength.color);
        prevClass = strength.color;
        if(passwordObj.passwordValue.length === 0)
            $('#strengthLabel').addClass('strengthLabel');
        console.log(strength);
    });

    passwordObj.passwordElement.blur(function(){
        passwordObj.isValidPassword();
    });
    
})();