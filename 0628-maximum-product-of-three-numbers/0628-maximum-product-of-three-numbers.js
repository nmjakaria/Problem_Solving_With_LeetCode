/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    let max3 = -Infinity;

    let min1 = Infinity;
    let min2 = Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (max1 <= nums[i]) {
            max3 = max2;
            max2 = max1;
            max1 = nums[i];
        } else if (max2 <= nums[i]){
            max3 = max2;
            max2 = nums[i];
        } else if(max3<= nums[i]){
            max3 = nums[i];
        }

        if (min1>= nums[i]){
            min2 = min1;
            min1 = nums[i];
        }else if(min2 >= nums[i]){
            min2 = nums[i];
        }
    }
    let max = Math.max(max1*max2*max3,min1*min2*max1);
    return max;
};