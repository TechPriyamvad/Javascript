// concat
// slice
// splice
// fill
// flat
// reverse
// sort

const num1 = [1,2,3];
const num2 = [4,5,6];

console.log(num1.concat(num2));

console.log(num1.slice(0,2));
console.log(num1.slice(-1));
console.log(num1);
console.log(num1.splice(0,2,5,4));

console.log(num1.fill(0,0,2));
console.log(num1);

const num3 = [1,2,[3,4,[5,6]]];
console.log(num3.flat(2));

console.log(num2.reverse());

console.log(num2.sort((a,b)=>b-a));