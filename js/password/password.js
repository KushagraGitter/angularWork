

//Password Class start    
    function Password(element) {

        this.passwordElement = element;
        this.passwordPattern = "";
        this.passwordValue = "";
        this.passwordStrength =  {
                weak: {color: "red", label: "weak"},
                medium: {color:"yellow", label: "medium"},
                strong: {color:"green", label: "strong"}
        }
    }
    //Check for password Strenght
    Password.prototype.checkStrength = function () {

        //Entering Letter only
        var regOnlyNumber = new RegExp('^[0-9]+$');;
        var regOnlyLetter = new RegExp('^[a-zA-Z]+$');
        if(regOnlyNumber.test(this.passwordValue)){
                //Entering Numbers only
            return this.passwordStrength.weak;
        }
        else if(regOnlyLetter.test(this.passwordValue)){
            return this.passwordStrength.weak;
        }
        else if(false){
             //Repeated characters (Case insensitive)
            return this.passwordStrength.weak;
        }
        else if(false){
            //Consecutive Numbers
            return this.passwordStrength.weak;
        }
        else{
            return this.passwordStrength.strong;
        }

    }
    //Check password Valid or not
    Password.prototype.isValidPassword = function () {
        console.log("checkPassword valid or not");
    }
//Password Class End 
