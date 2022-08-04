const canSum = (targetSum, arr, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let n of arr) {
        let remainder = targetSum - n;
        if (canSum(remainder, arr, memo) === true) {
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
};

console.log(canSum(6, [5, 4]));
console.log(canSum(9, [2, 3, 4]));
console.log(canSum(10, [1, 2, 3, 4]));
console.log(canSum(300, [7, 13]));
console.log(canSum(300, [7, 14]));
