const howSum = (targetSum, arr, memo = {}) => {
    if (targetSum in memo) {
        return memo[targetSum];
    }
    if (targetSum === 0) {
        return [];
    }
    if (targetSum < 0) {
        return null;
    }
    for (let n of arr) {
        const remainder = targetSum - n;
        const res = howSum(remainder, arr, memo);
        if (res !== null) {
            memo[targetSum] = [...res, n];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return memo[targetSum];
};

console.log(howSum(10, [3, 4, 5]));
console.log(howSum(300, [7, 14]));
