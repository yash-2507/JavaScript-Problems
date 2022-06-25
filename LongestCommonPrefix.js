//Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";
    var len1 = strs.length;
    var len2 = strs[0].length;
    var tmp = "";
    var res = "";
    outer: for (var i = 0; i < len2; i++) {
        tmp = strs[0][i];
        inner: for (var j = 1; j < len1; j++) {
            if (strs[j][i] !== tmp) break outer;
        }
        res += tmp;
    }
    return res;
};
