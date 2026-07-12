/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    const res = []

    for (let p1 = 0; p1 < nums.length-2; p1++) {
        if (p1 > 0 && nums[p1] === nums[p1 - 1]) continue;
        if (nums[p1] > 0 ) break

        let left = p1 + 1
        let right = nums.length - 1

        while (left < right) {
            let sum = nums[p1] + nums[left] + nums[right]
            if (sum === 0) {
                res.push([nums[p1], nums[left], nums[right]])

                while (left < right && nums[left] === nums[left+1]) left++
                while (left < right && nums[right] === nums[right-1]) right--

                left++
                right--
            } else if (sum > 0) {
                right--
            } else {
                left++
            }
        }
    }

    return res
};