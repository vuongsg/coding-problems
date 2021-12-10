/*
Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

Example 1:
Input: s = "hello"
Output: "holle"

Example 2:
Input: s = "leetcode"
Output: "leotcede"
*/
const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

export const reverseVowels = (s: string): string => {
    let leftPointer = 0;
    let rightPointer = s.length - 1;
    const arr = s.split('');
    
    while (leftPointer < rightPointer) {
        while (leftPointer < rightPointer && !vowels.has(arr[leftPointer].toLowerCase())) leftPointer++;
        while (rightPointer > leftPointer && !vowels.has(arr[rightPointer].toLowerCase())) rightPointer--;
        
        if (leftPointer < rightPointer) {
            let temp = arr[leftPointer]; arr[leftPointer] = arr[rightPointer]; arr[rightPointer] = temp;
            leftPointer++;
            rightPointer--;
        }
    }
    
    return arr.join('');
};