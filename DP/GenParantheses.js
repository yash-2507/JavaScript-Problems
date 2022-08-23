//Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

var generateParenthesis = function (n) {
    var res = [];
    if (n < 1) return res;
    generate(res, "", n, n);
    return res;
};

var generate = function (res, str, ll, rr) {
    if (ll || rr) {
        if (rr > ll) generate(res, str + ")", ll, rr - 1);
        if (ll) generate(res, str + "(", ll - 1, rr);
    } else {
        res.push(str);
    }
};

console.log(generateParenthesis(3))
