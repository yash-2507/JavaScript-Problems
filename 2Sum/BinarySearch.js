// implementation of 2Two problem using binary search

const twoSum = (arr, k) => {
    // sort the array
    const sorted = arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        let diff = k - arr[i];
        let binarySearch = function (arr, x) {
            let start = 0,
                end = arr.length - 1;
            while (start <= end) {
                let mid = Math.floor((start + end) / 2);
                if (arr[mid] === x) return mid;
                else if (arr[mid] < x) start = mid + 1;
                else end = mid - 1;
            }
            return false;
        };
        let match = binarySearch(arr, diff);
        if (match !== false && match > i) {
            console.log([i, match])
        }
    }
};

const arr = [1, 2, 3, 4, 5];
const k = 6;

twoSum(arr, k);
