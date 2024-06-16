// rain water trapped

/*
Problem Description
Given a vector A of non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.



    Problem Constraints
1 <= |A| <= 100000



Input Format
First and only argument is the vector A



Output Format
Return one integer, the answer to the question



Example Input
Input 1:

A = [0, 1, 0, 2]
Input 2:

A = [1, 2]


Example Output
Output 1:

1
Output 2:

0*/

const input = [3,2,1,4,3,5]
// Solution 1: Brute Force
// Time Complexity: O(n^2
/*function rainWaterTrapped(input){
    let leftMax = 0;
    let rightMax = 0;
    let totalWater = 0;
    let arrLen = input.length;
    // iterate over each building(i.e array element)
    for(let i=0;i < arrLen;i++){
        let trappedWater = 0;
        //find height of maximum building to left of i th element
        for(let j=0;j <= i;j++){
            leftMax = max(leftMax,input[j])
        }

        // find height of maximum building to right of i th element
        for(let j=i;j < arrLen;j++){
            rightMax = max(rightMax,input[j]);
        }

        // trappedWater
        trappedWater = min(leftMax,rightMax) - input[i];
        if(trappedWater > 0)
            totalWater += trappedWater;
    }
    return totalWater;
}*/

function max(a,b){
    return a > b ? a : b;
}

function min(a,b){
    return a < b ? a : b;
}

// Solution 2: Optimised
// Two pointer approach
// Time Complexity: O(n)
function rainWaterTrapped(input){
    let arrLen = input.length;
    let left = 0;
    let right = arrLen - 1;
    let leftmax = 0;
    let rightMax = 0;
    let trappedWater = 0;

    while(left <= right){
        // decide which pointer to move
        // move left pointer
        if(input[left] <= input[right]){
            //find maximum height of building to left
            if(input[left] >= leftmax)
            {
                leftmax = input[left];
            }
            // find how much water can be trapped in i th building
            trappedWater += (leftmax - input[left]);
            left++;
        }
        // move right pointer
        else{
            // find maximum height of building to right
            if(input[right] >= rightMax)
                rightMax = input[right];
            trappedWater += (rightMax - input[right]);
            right--;
        }
    }

    return trappedWater;
}
console.log(rainWaterTrapped(input));