// Given a string, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function (s) {
    var memo = {};
    var len = s.length;
    var max = 0;
    var start = 0;
    for (var i = 0; i < len; i++) {
        if (memo[s[i]] !== undefined) {
            start = Math.max(start, memo[s[i]] + 1);
        }
        memo[s[i]] = i;
        max = Math.max(max, i - start + 1);
    }
    return max;
};

const str = "abcabcbbabcd";
console.log(lengthOfLongestSubstring(str));
