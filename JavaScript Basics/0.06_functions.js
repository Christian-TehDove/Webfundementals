function hello(){
	console.log("hello!!!")
}

hello();

var hey = function(){
	console.log("hey!");
}

hey();

function Erick(){
	console.log("Erick");
}

Erick();

function addtwos(){
	var x=2;
	var y=2;
	console.log(x+y);
}

addtwos();

function multiply(){
	var x=8
	var y=4
	console.log(x*y);
}

multiply();

function numberedentered(x){
	console.log("the number entered is", x);
}
numberedentered(5);
numberedentered(7);
numberedentered(10000);

function addanytwonumbers(x,y){
	console.log("The sum is", x+y);
}
addanytwonumbers(67, 89);
addanytwonumbers(14, 7);
addanytwonumbers(5003, 7892)

function printfirstandlastname(first, last){
	console.log(first+" "+last);
}
printfirstandlastname("Christian", "Arellano");

function petNameandBreed(name,breed){
	var details = name+"  , "+breed;
	console.log(details)
	return details; 
}
petNameandBreed("Rofus", "Weiner Dog");
//sales tax is 0.07

function Salestax(price, amount,tax ){
	var tax=amount*price*.07;
	console.log("The amount of "+amount+" candy bar(s) will be "+amount*price+tax+"$");
}

Salestax(100,1);

