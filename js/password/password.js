

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
        var reg = new RegExp('^[a-zA-Z]$');
        var strengthTest = reg.test(this.passwordValue);

        var reg = new RegExp('^[0-9]+$');
        var strengthTest = reg.test(this.passwordValue);
        //Entering Numbers only
        //Repeated characters (Case insensitive)
        //Consecutive Numbers
        console.log("Strent Check");

    }
    //Check password Valid or not
    Password.prototype.isValidPassword = function () {
        console.log("checkPassword valid or not");
    }
//Password Class End 
