let RESULT = 0;
const checkMaze = (arr, n, m, k, x, y) => {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i === x - 1 && j === y - 1 && arr[i][j] === '.') {
                if (RESULT !== k) {
                    DFS(arr, n, m, i, j, k);
                }
            }
        }
    }
    if (RESULT === k) {
        console.log('YES');
    } else {
        console.log('NO');
    }
}

const DFS = (arr, n, m, x, y, k) => {
    if (x === n || y === m || x < 0 || y < 0 || arr[x][y] === '*' || k === RESULT) {
        return;
    }

    RESULT++;
    arr[x][y] = '*';

    DFS(arr, n, m, x + 1, y, k);
    DFS(arr, n, m, x - 1, y, k);
    DFS(arr, n, m, x, y + 1, k);
    DFS(arr, n, m, x, y - 1, k);
}
