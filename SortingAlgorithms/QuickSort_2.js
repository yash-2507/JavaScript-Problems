function quick_Sort(origArray) {
    if (origArray.length <= 1) {
        return origArray;
    } else {
        let left = [];
        let right = [];
        let newArray = [];
        let pivot = origArray.pop();
        let length = origArray.length;

        for (let i = 0; i < length; i++) {
            if (origArray[i] <= pivot) {
                left.push(origArray[i]);
            } else {
                right.push(origArray[i]);
            }
        }

        return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
    }
}

console.log(quick_Sort([2, 4, 1, 0, 5, -1]));
