const arr = [
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
];
const flipAndInvert = (arr = []) => {
    const invert = (n) => (n === 1 ? 0 : 1);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length / 2; j++) {
            const index2 = arr[i].length - 1 - j;
            if (j === index2) {
                arr[i][j] = invert(arr[i][j]);
            } else {
                const temp = arr[i][j];
                arr[i][j] = arr[i][index2];
                arr[i][index2] = temp;
                arr[i][j] = invert(arr[i][j]);
                arr[i][index2] = invert(arr[i][index2]);
            }
        }
    }
};
flipAndInvert(arr);
console.log(arr);
