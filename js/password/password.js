

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
        this.passwordLengtStructure = {
            numUpper:0,
            numLower:0,
            num:0,
            numSpclChar:0
        }

    }
    //Check for password Strenght
    Password.prototype.checkStrength = function () {

        //Entering Letter only
        var regOnlyNumber = new RegExp('^[0-9]+$');;
        var regOnlyLetter = new RegExp('^[a-zA-Z]+$');
        var regConjNumbers = new RegExp('/^\d{4}$/');
        if(regOnlyNumber.test(this.passwordValue)){
                //Entering Numbers only
            return this.passwordStrength.weak;
        }
        else if(regOnlyLetter.test(this.passwordValue)){
            return this.passwordStrength.weak;
        }
        else if(this.checkSequenceLetnNum()){
             //Repeated characters (Case insensitive) and numbers seq
            return this.passwordStrength.weak;
        }
        else{
            return this.passwordStrength.strong;
        }

    }
    //Check password Valid or not
    Password.prototype.isValidPassword = function () {
        var passwordLength = this.passwordValue.length
        if(this.passwordValue.length >=8){
            //upperCase letter length
            this.passwordLengtStructure.numUpper = passwordLength - this.passwordValue.replace(/[A-Z]/g, '').length; 
            this.passwordLengtStructure.numLower = passwordLength - this.passwordValue.replace(/[a-z]/g, '').length;
            this.passwordLengtStructure.num = passwordLength - this.passwordValue.replace(/[0-9]/g, '').length;
            this.passwordLengtStructure.numSpclChar = passwordLength - this.passwordValue.replace(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/g, '').length;
           
            var isValid = passwordLengthValidation(passwordLength, this.passwordLengtStructure); 
        function passwordLengthValidation(totalLength, passwordLengtStructure){
                var validityNum = totalLength*0.75;
                if(validityNum <= passwordLengtStructure.numUpper 
                      && validityNum <= passwordLengtStructure.numLower
                      && validityNum <= passwordLengtStructure.num
                      && validityNum <= passwordLengtStructure.numSpclChar)
                return true
                else
                return false;
        }
        return isValid;
    }
    else{
        return false;
    }
      
}

Password.prototype.checkSequenceLetnNum = function(){
    for(var i=0;i<=this.passwordValue.length-3;i++){
        var c1 = this.passwordValue.charCodeAt(i);
        var c2 = this.passwordValue.charCodeAt(i+1);
        var c3 = this.passwordValue.charCodeAt(i+2);
        if((c1-c2) === 1 && (c1-c2) === (c2-c3) ){
            return true;
        }
    }
    return false;
}
//Password Class End 
