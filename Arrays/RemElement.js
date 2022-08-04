//Given an array nums and a value val, remove all instances of that value in-place and return the new length.

var removeElement = function (nums, val) {
    var len = nums.length;
    var count = 0;
    for (var i = 0; i < len; i++) {
        if (nums[i] !== val) nums[count++] = nums[i];
    }
    return count;
};
