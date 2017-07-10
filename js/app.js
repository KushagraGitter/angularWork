foo();
var foo = 2;
function foo(){
    console.log('bar');

}
function foo(){
    console.log("foo")
}
console.log(foo);
foo();

function foo(){
    console.log('bar');

}
function foo(){
    console.log("foo")
}
console.log(foo);


function foo(num) {
	console.log( "foo: " + num );

	// keep track of how many times `foo` is called
	this.count++;
}

var obj = {count:0, foo:foo}



var i;

for (i=0; i<10; i++) {
	if (i > 5) {
		foo( i );
	}
}


// how many times was `foo` called?
console.log( obj.count ); // 0 -- WTF?

