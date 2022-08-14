// Given an array, print the Next Greater Element (NGE) for every element.

// Brute Force Method
// const NGE = (arr, n) => {
//     let res = [];
//     for (let i = 0; i < n; i++) {
//         let next = -1;
//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] > arr[i]) {
//                 next = arr[j];
//                 break;
//             }
//         }
//         res.push(next);
//     }
//     return res;
// };

// const arr = [4, 7, 0, 5, 4, -1, 5];
// const n = 7;
// console.log(NGE(arr, n));

// Stacks Method
// function printNGE(arr, n) {
//     var s = [];
//     s.push(arr[0]);
//     for (var i = 1; i < n; i++) {
//         if (s.length == 0) {
//             s.push(arr[i]);
//             continue;
//         }
//         while (!(s.length == 0) && s[s.length - 1] < arr[i]) {
//             console.log(s[s.length - 1] + ' --> ' + arr[i] + '\n');
//             s.pop();
//         }
//         s.push(arr[i]);
//     }
//     while (s.length != 0) {
//         console.log(s[s.length - 1] + ' --> ' + -1 + '\n');
//         s.pop();
//     }
// }

// NGE Method-2
function printNGE(arr, n) {
    var s = [];
    let res = new Array(n);
    for (let i = n - 1; i >= 0; i--) {
        if (s.length !== 0) {
            while (s.length != 0 && s[s.length - 1] <= arr[i]) {
                s.pop();
            }
        }
        res[i] = (s.length === 0) ? -1 : s[s.length - 1];
        s.push(arr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] + ' --> ' + res[i] + '\n');
    }
}

const arr = [4, 7, 0, 5];
const n = 4;
printNGE(arr, n);
