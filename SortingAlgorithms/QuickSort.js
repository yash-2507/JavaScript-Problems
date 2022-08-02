// Time Complexity -> O(NlogN)
// Space Complexity -> O(1)

function partition(arr, start = 0, end = arr.length - 1) {
   // Let's choose the pivot to be the arr[start] element
   let pivot = arr[start];
   let swapIdx = start;

   for (let i = start + 1; i <= end; i++) {
      if (arr[i] < pivot) {
         swapIdx++;
         // Swap current element with the element at the new pivot index
         [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
      }
   }

   // Swap the pivot element with the element at the pivotIndex index
   [arr[swapIdx], arr[start]] = [arr[start], arr[swapIdx]];

   // Return the index of the pivot element after swapping
   return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
   // Base case is that the left and right pointers don't overlap, after which we'll be left with an array of 1 item
   if (left < right) {
      let pivotIndex = partition(arr, left, right);

      // For left subarray, which is everything to the left of the pivot element
      quickSort(arr, left, pivotIndex - 1);

      // For the right sub array, which is everything to the right of the pivot element
      quickSort(arr, pivotIndex + 1, right);
   }
   // Return the array, when it's of length 1 i.e, left === right
   return arr;
}
