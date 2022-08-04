// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.
// Each number in candidates may only be used once in the combination.

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    var res = [];
    var len = candidates.length;
    candidates.sort((a, b) => a - b);
    dfs(res, [], 0, len, candidates, target);
    return res;
};

var dfs = function (res, stack, index, len, candidates, target) {
    var tmp = null;
    if (target < 0) return;
    if (target === 0) return res.push(stack);
    for (var i = index; i < len; i++) {
        if (candidates[i] > target) break;
        if (i > index && candidates[i] === candidates[i - 1]) continue;
        tmp = Array.from(stack);
        tmp.push(candidates[i]);
        dfs(res, tmp, i + 1, len, candidates, target - candidates[i]);
    }
};

