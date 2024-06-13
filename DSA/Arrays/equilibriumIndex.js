// Problem Description
// You are given an array A of integers of size N.

// Your task is to find the equilibrium index of the given array

// The equilibrium index of an array is an index such that the sum of elements at lower indexes is equal to the sum of elements at higher indexes.

// If there are no elements that are at lower indexes or at higher indexes, then the corresponding sum of elements is considered as 0.

// Note:

// Array indexing starts from 0.
// If there is no equilibrium index then return -1.
// If there are more than one equilibrium indexes then return the minimum index.

// Example Input
// Input 1:
// A = [-7, 1, 5, 2, -4, 3, 0]
// Input 2:

// A = [1, 2, 3]


// Example Output
// Output 1:
// 3
// Output 2:

// -1

const input = [1,3,5,2,2];
// brute for approach
// Time complexity: O(n^2)
// Space complexity: O(1)
function equilibriumIndexBruteForce(arr){
    const arrLen = arr.length;
    // iterate over the array
    for(let i=0;i < arrLen;i++){
        // calculate the sum of left index elements
        let leftSum = 0;
        for(let j=0;j < i;j++){
            leftSum += arr[j];
        }
        // calculate the sum of right index elements
        let rightSum = 0;
        for(let j=i+1;j < arrLen;j++){
            rightSum += arr[j];
        }
        if(leftSum === rightSum){
            return i;
        }
    }
    return -1;
}

console.log("Equilibrium Index(Brute force): ",equilibriumIndexBruteForce(input));

// Prefix Sum Approach
// Time complexity: O(n)
// Space complexity: O(n)
function equilibriumIndexPrefixSum(arr){
    let arrLen = arr.length;
    const pfSum = new Array(arrLen).fill(0);
    pfSum[0] = arr[0];

    // create prefix sum array
    for(let i=1;i < pfSum.length;i++){
        pfSum[i] = pfSum[i-1] + arr[i];
    }
    let totalSum = pfSum[arrLen-1];
    // calculate left index and right index elements sum
    for(let i=0;i < arrLen;i++){
        let leftSum = pfSum[i] - arr[i];
        let rightSum = totalSum - pfSum[i];
        if(leftSum === rightSum){
            return i;
        }
    }

    return -1;
}

console.log(`Equilibrium index(Prefix Sum): ${equilibriumIndexPrefixSum(input)}`);

// Optimised Approach
// Time complexity: O(n)
// Space complexity: O(1)
function equilibriumIndexOptimised(arr){
    let leftSum = 0;
    // calculate the total sum of the array
    let totalSum = arr.reduce((acc,curr)=>acc+curr,0);
    for(let i=0;i < arr.length;i++){
        let rightSum = totalSum - leftSum - arr[i];
        if(leftSum === rightSum){
            return i;
        }

        leftSum += arr[i];
    }
    return -1;
}
console.log(`Equilibrium index(Optimised): ${equilibriumIndexOptimised(input)}`);

