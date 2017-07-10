(function(){
    window.onload = function(){
        console.log("hello");
        var objFoo = new Foo();
        document.getElementById("mybutton").addEventListener("click", function(e){
            console.log(this);
        });
        function Foo(){
            var name = "appleName"
            this.name = "apple";
        }
    }
})();