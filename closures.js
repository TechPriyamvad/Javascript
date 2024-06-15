// function x() {
//   let a = 10,
//     b = 20;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }

// let z = x();
// console.log(z);
// z();

// function Counter() {
//   var count = 0;
//   this.incrementCount = function () {
//     count++;
//     console.log(count);
//   };
//   this.decrementCount = function () {
//     count--;
//     console.log(count);
//   };
// }

// let counter = new Counter();
// counter.incrementCount();
// counter.incrementCount();
// counter.incrementCount();
// counter.decrementCount();

for(var i=0;i < 10;i++){
  function timer(i)
  {
    setTimeout(()=>{
      console.log(i);
    },i*1000)
  }
  timer(i);
}


function test(num){
  let i=0;
  (function(){
    console.log(this,num);
  })();
}

test(10);


function likeTheVideo(){
  let called = 0;

  return function(){
    if(called > 0){
      console.log("function already called");
    }
    else{
      called++;
    }
  }
}

let isSubscribed = likeTheVideo();
isSubscribed();
isSubscribed();