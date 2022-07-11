// implementation of 2Sum using two pointer technique

const twoSum = (arr, k) => {
    // sort the array
    let sorted = arr.sort((a, b) => {
        return a - b;
    });
    let left = 0,
        right = arr.length - 1;
    while (left < right) {
        if (arr[left] + arr[right] === k) {
            console.log([left, right]);
            left++
            right--
        } else if (arr[left] + arr[right] > k) {
            left++;
        } else {
            right--;
        }
    }
};

const arr = [1, 2, 3, 4, 5]
const k = 6

twoSum(arr, k)