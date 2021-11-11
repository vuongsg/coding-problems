//There is a function signFunc(x) that returns:
//1 if x is positive.
//-1 if x is negative.
//0 if x is equal to 0.
//Given an integer array nums. Let product be the product of all values in the array nums.
//Input: nums = [-1,-2,-3,-4,3,2,1]
//Output: 1

//Input: nums = [1,5,0,2,-3]
//Output: 0

//Input: nums = [-1,1,-1,1,-1]
//Output: -1

export const arraySign = (nums: number[]): number => {
    let countNegative = 0;
    
    for (let i of nums) {
        if (i === 0) return 0;
        else if (i < 0) countNegative++;
    }
    
    return (countNegative & 1) === 1 ? -1 : 1;
};