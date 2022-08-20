// Upper bound in binary seach of a sorted array

const upper_bound = (arr, target) => {
    let left = 0,
        right = arr.length;
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (target >= arr[mid]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
};

const arr = [1, 4, 4, 4, 6, 6, 33, 101];
const upperBound = upper_bound(arr, 4);
console.log(upperBound);