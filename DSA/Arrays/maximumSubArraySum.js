// Ques 4 - Given an integer array nums, find the subarray with the largest sum,
// and return its sum.

// Input: [-2,1,-3,4,-1,2,1,-5,4]     ----->>>>>    Output: 6,   [4,-1,2,1]
// Input: [5,4,-1,7,8]                ----->>>>>    Output: 23,  [5,4,-1,7,8]

// [-2,1,-3,4,-1,2,1,-5,4] i=3,j=4
// maxSum = 4 
// currentSum = 3

// Solution1: Brute Force
// Time Complexity: O(n^2)
function maximumSubArraySum(arr){
    let maxSum = 0;
    let startIndex = 0;
    let endIndex = 0;
    for(let i=0;i < arr.length;i++){
        let currentSum = 0;
        for(let j = i;j < arr.length;j++){
            currentSum += arr[j];
            if(currentSum > maxSum){
                maxSum = currentSum;
                startIndex = i;
                endIndex = j;
            }
        }
    }
    return {sum:maxSum,subArray:arr.slice(startIndex,endIndex+1)};
}
 
// Solution2: Kadane's Algorithm
// [5,4,-1,7,8] i=4
// sum=23;
// maxSum = 23
// [-2,1,-3,4,-1,2,1,-5,4] i=5
// sum = 5;
// maxSum = 5
// startIndex = 3;
// endIndex = 5;
function maximumSubArraySumOptimised(arr){
    let maxSum = arr[0];
    let sum = 0;
    for(const element of arr){
        sum += element;
        if(sum > maxSum){  
            maxSum = sum;
        }
        if(sum < 0){
            sum = 0;
        }
    }  

    return maxSum;
}
console.log(maximumSubArraySum([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maximumSubArraySum([5,4,-1,7,8]));
console.log(maximumSubArraySumOptimised([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maximumSubArraySumOptimised([5,4,-1,7,8]));