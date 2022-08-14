// You are give an array of integers of size N. You need to find and print maximum sum of contiguous sub array (containing atleast one integer) from this array.

const findSum = (a, size) => {
    var maxint = Math.pow(2, 53);
    var max_so_far = -maxint - 1;
    var max_ending_here = 0;

    for (var i = 0; i < size; i++) {
        max_ending_here = max_ending_here + a[i];
        if (max_so_far < max_ending_here) max_so_far = max_ending_here;

        if (max_ending_here < 0) max_ending_here = 0;
    }
    return max_so_far;
};
