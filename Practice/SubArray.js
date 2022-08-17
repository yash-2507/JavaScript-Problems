// Driver code
var arr = [1, 2, 3];
let bag = '';
printSubArrays(arr, 0, 0);
bag = bag.split('\n');
bag.map((el) => {
    el ? console.log(el.split(' ').map(Number)) : console.log(el);
});

function printSubArrays(arr, start, end) {
    if (end === arr.length) return;
    else if (start > end) printSubArrays(arr, 0, end + 1);
    else {
        for (let i = start; i < end; i++) {
            bag += arr[i] + ' ';
        }
        bag += arr[end] + '\n';
        printSubArrays(arr, start + 1, end);
    }
    return;
}
