// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows.

var convert = function (s, numRows) {
    if (s.length <= numRows || numRows < 2) return s;
    var len = s.length;
    var num = 2 * (numRows - 1);
    var arr = Array(numRows).fill("");
    var tmp = 0;
    for (var i = 0; i < len; i++) {
        tmp = i % num;
        if (tmp < numRows) {
            arr[tmp] += s[i];
        } else {
            arr[num - tmp] += s[i];
        }
    }
    return arr.join("");
};
