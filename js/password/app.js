(function(){

   var passwordObj = new Password($('#password'));
   var strengthLabel = $('#strengthLabel');
   $('#notValidPassword').hide(); 
   var prevClass = ''
    $('#submit').on("click", function(event){
        event.preventDefault();
       // checkPassword();
        return false;
    });

    $('#showPassword').click(function(){
        $('#password').attr('type', 'text');
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
            if(!isValidPassword){
                 $('#notValidPassword').show();
            }else{
              $('#notValidPassword').hide();  
            }
          
           
        console.log(strength);
    });

    passwordObj.passwordElement.blur(function(){
        passwordObj.isValidPassword();
    });
    
})();