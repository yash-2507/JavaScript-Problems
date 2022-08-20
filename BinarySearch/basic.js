// Recursive method

const binarySearch = (arr, target, left = 0, right = arr.length - 1) => {
    if (left > right) return;
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, right);
    }
};

// Iterative method

const binarySearchIterative = (arr, target) => {
    let left = 0, right = arr.length-1;
    while(left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if(arr[mid] === target) return mid

        if(arr[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
}

const arr = [1, 3, 5, 10, 100];
const ans = binarySearchIterative(arr, 10)
console.log(ans);
