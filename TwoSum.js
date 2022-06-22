// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// Easy

var twoSum = function (nums, target) {
    var memo = {};
    var len = nums.length;
    for (var i = 0; i < len; i++) {
        if (nums[i] in memo) {
            return [memo[nums[i]], i];
        }
        memo[target - nums[i]] = i;
    }
    return [-1, -1];
};

const arr = [2, 10, 7, 11, 15];
const target = 9;

console.log(twoSum(arr, target));
