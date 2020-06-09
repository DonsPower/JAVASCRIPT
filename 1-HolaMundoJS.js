var message;
message= "Hello putin";
message= "remplazo";
alert("Hola a mi nuevo mundo revolucionario");
alert(message);

let str = "123";
alert(typeof str); // string

var num = Number(str); // becomes a number 123

alert(num); // number

var age = prompt('How old are you?', 100);

alert(`You are ${age} years old!`); // You are 100 years old!

let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true if OK is pressed

function showsee(){
  alert("Esa es una funcion.")
}
var fun= (a,b) => a+b;
alert(fun(100,2));
