const longestPath = (arr, n, m) => {
    let result = 0,
        visited = Array.from({ length: n }, (_) => new Uint16Array(m));
    const DFS = (y, x) => {
        if (visited[y][x]) return visited[y][x];
        let val = arr[y][x];
        visited[y][x] =
            1 +
            Math.max(
                y < n - 1 && arr[y + 1][x] < val ? DFS(y + 1, x) : 0,
                y > 0 && arr[y - 1][x] < val ? DFS(y - 1, x) : 0,
                x < m - 1 && arr[y][x + 1] < val ? DFS(y, x + 1) : 0,
                x > 0 && arr[y][x - 1] < val ? DFS(y, x - 1) : 0,
            );
        return visited[y][x];
    };
    for (let i = 0; i < n; i++) for (let j = 0; j < m; j++) result = Math.max(result, DFS(i, j));
    return result;
};

console.log(
    longestPath([
        [9, 9, 4],
        [6, 6, 8],
        [2, 1, 1],
    ], 3, 3),
);
