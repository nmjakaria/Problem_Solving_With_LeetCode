/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let temp = NaN;
    let count = 0;
    for (let i = 0; i<nums.length; i++){
        if(nums[i] !== temp){
            nums[count] = nums[i];
            temp = nums[i];
            count++
        }
    }
    return count;
};