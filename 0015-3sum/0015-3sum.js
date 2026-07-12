/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    const ans = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // duplicate skip

        const seen = new Set();
        for (let j = i + 1; j < nums.length; j++) {
            const complement = -nums[i] - nums[j];
            if (seen.has(complement)) {
                ans.push([nums[i], complement, nums[j]]);
                while (j + 1 < nums.length && nums[j] === nums[j + 1]) j++;
            }
            seen.add(nums[j]);
        }
    }

    return ans;
};