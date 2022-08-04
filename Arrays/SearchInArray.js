//You are given a target value to search. If found in the array return its index, otherwise return -1.
//Your algorithm's runtime complexity must be in the order of O(log n).

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    var len = nums.length;
    var left = 0;
    var right = len - 1;
    var mid = 0;

    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] > nums[right]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
};
