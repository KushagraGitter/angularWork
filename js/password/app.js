(function(){

//Password Class start    
    function Password(element) {

        this.passwordElement = element;
        this.passwordPattern = "";
        this.passwordValue = "";
        this.passwordStrength =  {
                weak:"weak",
                medium:"medium",
                strong:"strong"
        }
    }
    //Check for password Strenght
    Password.prototype.checkStrength = function () {
        console.log("Strent Check");

    }
    //Check password Valid or not
    Password.prototype.isValidPassword = function () {
        console.log("checkPassword valid or not");
    }
//Password Class End 



   var passwordObj = new Password($('#password'));


    $('#submit').on("click", function(event){
        event.preventDefault();
        checkPassword();
        return false;
    });

    passwordObj.passwordElement.keyup(function(e){
        passwordObj.checkStrength();
    });

    passwordObj.passwordElement.blur(function(){
        passwordObj.isValidPassword();
    });
    
})();