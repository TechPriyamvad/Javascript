/*
Problem Description
You are given an integer array A of length N.
You have to find the sum of all subarray sums of A.
More formally, a subarray is defined as a contiguous part of an array which we can obtain by deleting zero or more elements from either end of the array.
A subarray sum denotes the sum of all the elements of that subarray.

Note : Be careful of integer overflow issues while calculations. Use appropriate datatypes.



Problem Constraints
1 <= N <= 105
1 <= Ai <= 10 4


Input Format
The first argument is the integer array A.


Output Format
Return a single integer denoting the sum of all subarray sums of the given array.


Example Input
Input 1:
A = [1, 2, 3]
Input 2:

A = [2, 1, 3]


Example Output
Output 1:
20
Output 2:

19
*/
const input = [2,1,3]
function sumOfAllSubArray(input){
    let totalSubArraySum = 0;
    let MOD = Math.pow(10,9) + 7;
    let arrLen = input.length;

    for(let i=0;i < arrLen;i++){
        // how many subarrays where A[i] is present as last element
        let lastElement = i+1;
        // how many subarrays where A[i] is present as first element
        let firstElement = (arrLen - i);
        totalSubArraySum += (input[i] * lastElement * firstElement)%MOD;;
    }

    return totalSubArraySum;
}

console.log("Sum of all subarray sums: ",sumOfAllSubArray(input));