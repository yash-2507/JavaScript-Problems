function walkInPark(n, m, matrix) {
    let arr = ["00"];
    let count = 1;
    let step = 0;
    let i = 0,
        j = 0;
    while (step < n * m) {
        if (matrix[i][j] == "L") {
            j -= 1;
            let str = "" + i + j;
            if (arr.includes(str)) {
                break;
            }
            if (j < 0) {
                break;
            }
            arr.push(str);
        } else if (matrix[i][j] == "R") {
            j += 1;
            let str = "" + i + j;
            if (arr.includes(str)) {
                break;
            }
            if (j >= m) {
                break;
            }
            arr.push(str);
        } else if (matrix[i][j] == "U") {
            i -= 1;
            let str = "" + i + j;
            if (arr.includes(str)) {
                break;
            }
            if (i < 0) {
                break;
            }
            arr.push(str);
        } else {
            i += 1;
            let str = "" + i + j;
            if (arr.includes(str)) {
                break;
            }
            if (i >= n) {
                break;
            }
            arr.push(str);
        }
        count++;
        strp++;
    }
    return count;
}
