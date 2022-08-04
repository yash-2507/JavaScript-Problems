// Given an array of non-negative integers, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Your goal is to reach the last index in the minimum number of jumps.

/**
 * @param {number[]} nums
 * @return {number}
 */

var jump = function (nums) {
    var len = nums.length;
    var step = 0;
    var now = 0;
    var max = 0;

    for (var i = 0; i < len - 1; i++) {
        max = Math.max(max, i + nums[i]);
        if (i === now) {
            step++;
            now = max;
        }
    }

    return step;
};
