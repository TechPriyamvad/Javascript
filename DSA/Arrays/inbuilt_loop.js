// map
const numbers = [1,2,3,4,5,6];

const incrementBy2 = numbers.map((item,index,arr)=>{
    // console.log(item,index,arr);
    return item+2;

    // working
    // 0 - > 1+2 = 3
    // 1 - > 2+2 = 4
    // 2 - > 3+2 = 5
    // 3 - > 4+2 = 6
    // 4 - > 5+2 = 7
    // 5 - > 6+2 = 8
})

console.log(incrementBy2);

// filter : filter out even numbers
const evenNumbers = numbers.filter((item,index,arr)=>{
    return item%2==0;
    // working
    // 1%2==0 -> false
    // 2%2==0 -> true
    // 3%2==0 -> false
    // 4%2==0 -> true
    // 5%2==0 -> false
    // 6%2==0 -> true
})

console.log(evenNumbers);

// reduce
const sum = numbers.reduce((acc,val)=>{
    return acc+val;
    // working
    // 0+1 = 1
    // 1+2 = 3
    // 3+3 = 6
    // 6+4 = 10
    // 10+5 = 15
    // 15+6 = 21
},0)

console.log(sum);

// some
const someGreaterThan2 = numbers.some((item)=>item>7)
console.log(someGreaterThan2);

// every
const allGreaterThan2 = numbers.every((item)=>item>0);
console.log(allGreaterThan2);

// find
const findGreaterThan2 = numbers.find((item)=>item>3);
console.log(findGreaterThan2);