// Time Complexity -> O(N2)
// Space Complexity -> O(1)

const bubbleSort = (arr, N) => {
   for (let i = 0; i < N; i++) {
      for (let j = 0; j < N - i; j++) {
         if (arr[j + 1] < arr[j]) {
            // Swap j and j + 1 indices
            [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
         }
      }
   }
   return arr;
};

const arr = [3, 1, 5, 2, 0, 1];
console.log(bubbleSort(arr, arr.length));
