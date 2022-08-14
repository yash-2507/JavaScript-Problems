// Determine whether an integer is a palindrome. An integer is a palindrome 
// when it reads the same backward as forward

var isPalindrome = function (x) {
    var s = "" + x;
    var l = 0;
    var r = s.length - 1;
    while (l < r) {
        if (s[l] !== s[r]) return false;
        l++;
        r--;
    }
    return true;
};
