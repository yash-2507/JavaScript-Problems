const bestSum = (targetSum, arr, memo = {}) => {
    if (targetSum in memo) {
        return memo[targetSum];
    }
    let min = null;
    if (targetSum === 0) {
        return [];
    }
    if (targetSum < 0) {
        return null;
    }
    for (let num of arr) {
        let remainder = targetSum - num;
        const res = bestSum(remainder, arr, memo);
        if (res !== null) {
            let possible = [num, ...res];
            if (min === null || min.length > possible.length) {
                min = possible;
            }
        }
    }
    memo[targetSum] = min;
    return min;
};

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));
