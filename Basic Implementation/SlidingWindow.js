//Given an array of integers of size ‘n’, Our aim is to calculate the maximum sum of ‘k’ consecutive elements in the array.

//Brute Force Method
function maxSum(arr, n, k) {
    // Initialize result
    let max_sum = Number.MIN_VALUE;

    // Consider all blocks starting with i.
    for (let i = 0; i < n - k + 1; i++) {
        let current_sum = 0;
        for (let j = 0; j < k; j++) current_sum = current_sum + arr[i + j];

        // Update result if required.
        max_sum = Math.max(current_sum, max_sum);
    }

    return max_sum;
}

//SLiding Window Technique
function maxSum(arr, n, k) {
    let max = 0;
    let sum = 0;
    // find initial sum of first k elements
    for (let i = 0; i < k; i++) {
        sum += arr[i];
        max = sum;
    }
    // iterate the array once
    // and increment the right edge
    for (let i = k; i < n; i++) {
        sum += arr[i] - arr[i - k];

        // compare if sum is more than max,
        // if yes then replace
        // max with new sum value
        if (sum > max) {
            max = sum;
        }
    }
    return max;
}
