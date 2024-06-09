// Ques 2 - Rotate Array by K
// Given an integer array nums, rotate the array to the right by k steps,
// where k is non - negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3  ----->>>>>  Output: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k = 2   ----->>>>>  Output: [3,99,-1,-100]

// [1,2,3,4,5,6,7] => [7,1,2,3,4,5,6] => [6,7,1,2,3,4,5] => [5,6,7,1,2,3,4]

// Solution1:Using splice and unshift
// [1,2,3,4,5,6,7] => splice =>[5,6,7]
// [5,6,7] => unshift => [1,2,3,4] => [5,6,7,1,2,3,4]
// Time Complexity: O(n)

function rotateArrayByUsingArrayInbuiltFunction(arr,k){
    const arrLen = arr.length;
    if(k > arrLen){
        k = k % arrLen;
    }
    const rotatedArray = arr.splice(arr.length-k,k);
    // return rotatedArray.concat(arr);
    arr.unshift(...rotatedArray);
    return arr;
}

console.log(rotateArrayByUsingArrayInbuiltFunction([1,2,3,4,5,6,7],3));

// Solution2:
// complete reverse of the array
// [1,2,3,4,5,6,7] => [7,6,5,4,3,2,1]
// reverse first k elements
// [7,6,5,4,3,2,1] => [5,6,7,4,3,2,1]
// reverse last n-k elements
// [5,6,7,4,3,2,1] => [5,6,7,1,2,3,4]

function rotateArrayWithoutUsingArrayMethods(arr,k){
    if(k < 0){
        k = 
        k = k + arr.length;
    }
    if(k > arr.length){
        k = k % arr.length;
    }

    // reverse the complete array
    reverseArray(arr,0,arr.length-1);
    // reverse the first k elements
    reverseArray(arr,0,k-1);
    // reverse the last n-k elements
    reverseArray(arr,k,arr.length-1);

    return arr;
}

// [5,6,7]
// start = 1
// end = 1
// temp = 7
// arr[0] = 5
// arr[2] = 7
// k=-30 => -30 + 7 = -23

function reverseArray(arr,start,end){
    while(start < end){
        let temp = arr[start];
        arr[start++] = arr[end];
        arr[end--] = temp;
    }
}

console.log(rotateArrayWithoutUsingArrayMethods([1,2,3,4,5,6,7],7));
console.log(rotateArrayWithoutUsingArrayMethods([-1,-100,3,99],2));
// console.log(rotateArrayWithoutUsingArrayMethods([-1,-100,3,99],-20));