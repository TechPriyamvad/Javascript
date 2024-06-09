// Ques 1 - Second Largest Number
// Given an array Arr of size N, print second largest
// distinct element from an array.

// Input: [12, 35, 1, 10, 34, 1]  ----->>>>>  Output: 34
// Input: [10, 5, 10]             ----->>>>>  Output: 5

// Solution1: Using set and sort 
// [10, 5, 10]
// Time complexit:O(nlogn) + O(n) = O(nlogn)
function secondLargestNumber(arr){ 
    const uniqueArr = Array.from(new Set(arr)); //O(n)
    const result = uniqueArr.sort((a,b)=>b-a); //O(nlogn)
    const secondLargestElement = result[1];//O(1)
    return secondLargestElement;//O(1)
}

console.log(secondLargestNumber([12, 35, 1, 10, 34, 1]));

// Solution2
// Time Complexity: O(n)
function secondLargestNumberOptimised(arr){
     let largest = Number.MIN_SAFE_INTEGER;
     let secondLargest = Number.MIN_SAFE_INTEGER;

     for(let i=0;i < arr.length;i++){
        if(arr[i] > largest){
            secondLargest = largest;
            largest = arr[i];
        }
        else if(arr[i] != largest && arr[i] > secondLargest){
            secondLargest = arr[i];
        }
     }
        return secondLargest;
}

console.log(secondLargestNumberOptimised([35, 34, 1, 10, 12, 1]));
// const set = new Set();
// set.add(1);
// set.add(2);
// set.add(3);
// console.log(set);
// set.delete(3);
// console.log(set);
// // empty the set
// set.clear();
// console.log(set);
// set.add(1);
// set.add(2);
// set.add(3);
// set.add(4);
// console.log(set);
// console.log(set.has(5));

// set.forEach((value)=>console.log(value));

// for(let value of set){
//     console.log(value);
// }