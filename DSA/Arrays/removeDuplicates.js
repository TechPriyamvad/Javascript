// Ques 3 - Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, remove
// the duplicates in-place such that each unique element appears
// only once.The relative order of the elements should be kept
// the same.Then return the number of unique elements in nums.

// Input: [1,1,2]               ----->>>>>  Output: 2, [1,2,_]
// Input: [0,0,1,1,1,2,2,3,3,4] ----->>>>>  Output: 5, [0,1,2,3,4,_,_,_,_,_]

// Solution1: Using set
// Time Complexity: O(n)
// Space Complexity: O(n)
function removeDuplicatesUsingSet(arr){
    const uniqueArr = Array.from(new Set(arr));
    return uniqueArr.length;
}

// Solution2: Using JS method
// [0,0,1,1,1,2,2,3,3,4]
// [0,1,1,1,2,2,3,3,4]
// [0,1,1,2,2,3,3,4]
// [0,1,2,2,3,3,4]
// [0,1,2,3,3,4]
function removeDuplicatesUsingJSMethod(arr){
    for(let i=0;i < arr.length-1;i++){
        if(arr[i] === arr[i+1]){
            arr.splice(i+1,1);
            i--;
        }
    }
    return arr.length;
}

// Solution3 :Without using JS method
// Two pointer approach
// [0,0,1,1,1,2,2,3,3,4] i=0,j=1
// [0,1,1,1,1,2,2,3,3,4] i=1,j=2
// [0,1,2,1,1,2,2,3,3,4] i=2,j=5
// [0,1,2,3,1,2,2,3,3,4] i=3,j=7
// [0,1,2,3,4,2,2,3,3,4] i=4,j=9
function removeDuplicatesWithoutUsingJSMethod(arr){
    if(arr.length === 0){
        return 0;
    }
    let i=0;
    for(let j=1;j < arr.length;j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }

    return i+1;
}
// console.log(removeDuplicatesUsingSet([1,1,2]));
console.log(removeDuplicatesUsingSet([0,0,1,1,1,2,2,3,3,4]));
console.log(removeDuplicatesUsingJSMethod([0,0,1,1,1,2,2,3,3,4]));
console.log(removeDuplicatesWithoutUsingJSMethod([0,0,1,1,1,2,2,3,3,4]));