// Given a collection of numbers that might contain duplicates, return all possible unique permutations.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permuteUnique = function (nums) {
    var res = [];
    nums.sort((a, b) => a - b);
    dfs(res, [], nums);
    return res;
};

var dfs = function (res, arr, nums) {
    var len = nums.length;
    var tmp1 = null;
    var tmp2 = null;

    if (!len) return res.push(arr);

    for (var i = 0; i < len; i++) {
        if (nums[i] === nums[i - 1]) continue;

        tmp1 = Array.from(arr);
        tmp1.push(nums[i]);

        tmp2 = Array.from(nums);
        tmp2.splice(i, 1);

        dfs(res, tmp1, tmp2);
    }
};
