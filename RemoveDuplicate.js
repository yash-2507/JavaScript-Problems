//Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

var removeDuplicates = function (nums) {
    var len = nums.length;
    var last = NaN;
    var count = 0;
    for (var i = 0; i < len; i++) {
        if (nums[i] !== last) {
            nums[count] = nums[i];
            last = nums[i];
            count++;
        }
    }
    return count;
};
