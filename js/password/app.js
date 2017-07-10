(function(){

   var passwordObj = new Password($('#password'));
   var strengthLabel = $('#strengthLabel');
   var prevClass = ''
    $('#submit').on("click", function(event){
        event.preventDefault();
       // checkPassword();
        return false;
    });

    passwordObj.passwordElement.focusout(function(e){
        passwordObj.passwordValue = passwordObj.passwordElement.val();
        var strength = passwordObj.checkStrength();
          strengthLabel.removeClass('strengthLabel');
        if(prevClass !== undefined && prevClass!=='' && prevClass !== strength.color){
            
            strengthLabel.removeClass(prevClass);
        }
        strengthLabel.empty();
        strengthLabel.append(strength.label);
        strengthLabel.addClass(strength.color);
        prevClass = strength.color;
        if(passwordObj.passwordValue.length === 0)
            strengthLabel.addClass('strengthLabel');
        var isValidPassword = passwordObj.isValidPassword();    
        console.log(strength);
    });

    passwordObj.passwordElement.blur(function(){
        passwordObj.isValidPassword();
    });
    
})();