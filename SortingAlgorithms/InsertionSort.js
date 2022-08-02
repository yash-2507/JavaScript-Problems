// Time Complexity -> O(N2)
// Space Complexity -> O(1)

const insertionSort = (arr, N) => {
   for (let i = 1; i < N; i++) {
      for (let j = i - 1; j > -1; j--) {
         // Swap if needed
         if (arr[j + 1] < arr[j]) {
            [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
         }
      }
   }
   return arr;
};

const arr = [1, 3, 2, 0, 5];
let ans = insertionSort(arr, 5);
console.log(ans);
