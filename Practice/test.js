const fibb = (n, memo = {}) => {
    if(n in memo) {
        return memo[n]
    }
    if(n === 1 || n === 2) return 1
    memo[n] =  fibb(n-1) + fibb(n-2);
    return memo[n]
}
console.log(fibb(30));