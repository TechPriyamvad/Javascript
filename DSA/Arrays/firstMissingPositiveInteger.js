// first missing integer

/*
* Problem Description
Given an unsorted integer array, A of size N. Find the first missing positive integer.

Note: Your algorithm should run in O(n) time and use constant space.



Problem Constraints
1 <= N <= 1000000

-109 <= A[i] <= 109



Input Format
First argument is an integer array A.



Output Format
Return an integer denoting the first missing positive integer.



Example Input
Input 1:

[1, 2, 0]
Input 2:

[3, 4, -1, 1]
Input 3:

[-8, -7, -6]


Example Output
Output 1:

3
Output 2:

2
Output 3:

1
* */

const input = [3, 4, -1, 1];
//solution 1: Brute force
// Time Complexity: O(n^2)
// Space Complexity: O(1)
/*function firstMissingPositiveInteger(A){
    const arrLen = A.length;
    for(let i=1;i <= arrLen;i++){
        let isPresent = false;
        for(let j=0;j < arrLen;j++){
            if(i === A[j])
                isPresent = true;
        }
        if(!isPresent)
            return i;
    }

    return arrLen + 1;
}*/

// solution 2: sorting
// Time Complexity: O(nlogn)
// Space Complexity: O(1)
/*function firstMissingPositiveInteger(A){
    A.sort((a,b) => a-b);
    let missing = 1;
    for(const element of A){
        if(element === missing)
            missing++;
    }
    return missing;
}*/

// solution 3: using indexing method
function firstMissingPositiveInteger(A){
    const arrLen = A.length;
    for(let i=0;i < arrLen;i++){
        // Dont' swap when element is either negative or greater than arrLen or already in its correct position or duplicate
        while(A[i] > 0 && A[i] <= arrLen && A[A[i]-1] !== A[i]){
            const temp = A[A[i]-1];
            A[A[i]-1] = A[i];
            A[i] = temp;
        }
    }

    for(let i=0;i < arrLen;i++){
        if(A[i] !== i+1)
            return i+1;
    }

    return arrLen + 1;
}
console.log(`First Missing positive: ${firstMissingPositiveInteger(input)}`);