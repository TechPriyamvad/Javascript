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

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;

  if (responseFromServer) {
    resolve('We got the data');
  } else {
    reject('Data not received');
  }
});

console.log('hello');
makeServerRequest.then((result) => {
  console.log(result);
});
