// grid traveler
const gridTravel = (m, n, memo = {}) => {
    let key = m + "," + n;

    if (key in memo) {
        return memo[key];
    }
    if (m == 1 && n == 1) {
        return 1;
    }
    if (m == 0 || n == 0) {
        return 0;
    }
    memo[key] = gridTravel(m - 1, n, memo) + gridTravel(m, n - 1, memo);
    return memo[key];
};

console.log(gridTravel(18, 18));
