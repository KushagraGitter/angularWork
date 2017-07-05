(function(){
    window.onload = function(){
        console.log("hello");
        var objFoo = new Foo();
        document.getElementById("mybutton").addEventListener("click", (function(event){
            console.log(this);
        }).bind(Foo))
        function Foo(){
            var name = "appleName"
            this.name = "apple";
        }
        
    }
  

})();