//Given a string s, find the longest palindromic substring in s.

var longestPalindrome = function (str) {
    let n = str.length;
    if (n < 2) return n;

    let maxLength = 1,
        start = 0;
    let low, high;
    for (let i = 0; i < n; i++) {
        low = i - 1;
        high = i + 1;
        while (high < n && str[high] == str[i])
            high++;

        while (low >= 0 && str[low] == str[i])
            low--;

        while (low >= 0 && high < n && str[low] == str[high]) {
            low--;
            high++;
        }

        let length = high - low - 1;
        if (maxLength < length) {
            maxLength = length;
            start = low + 1;
        }
    }
    console.log(str.substring(start, maxLength + start));
    return maxLength;
};

console.log(longestPalindrome('abcbacd'));
