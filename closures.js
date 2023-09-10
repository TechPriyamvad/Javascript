function x() {
  let a = 10,
    b = 20;
  function y() {
    console.log(a);
  }
  return y;
}

let z = x();
console.log(z);
z();

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
