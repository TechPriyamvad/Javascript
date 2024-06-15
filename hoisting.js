// hositing;
// console.log(x);
// var x = 7;

// var hositing = () => {
//   let a = 10;
//   console.log(a);
// };

// const test = {
//   prop:42,
//   func: function(){
//     return this.prop;
//   }
// }

// const a = test.func;
// console.log(a());
// console.log(test.func());

// function a(){
//   return 1+2;
// }

// a(test,function(orderId){
//   b(test1,function(){
//     c(test2,function(){

//     })
//   })
// })/

// const makeServerRequest = new Promise((resolve, reject) => {
//   // responseFromServer is set to true to represent a successful response from a server
//   let responseFromServer = true;

//   if (responseFromServer) {
//     resolve('We got the data');
//   } else {
//     reject('Data not received');
//   }
// });

// console.log('hello');
// makeServerRequest.then((result) => {
//   console.log(result);
// });
console.log(host);
var host = "hoisting"

var sayHello = function(){
  console.log("hello priyamvad");
}
sayHello();

var a = {num:1}
var b = {num:1}
console.log(a==b);

num1=3;
function cal() {
num1=6;
num2=5;
num3=num2*num1;
console.log(num3);
}
cal();

function Add(){
  console.log(answer)
  var answer = 2
};
Add()

function fn(){
  return 4+5;
 }
 console.log(fn(3,7));