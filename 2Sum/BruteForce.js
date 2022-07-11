// implementation of 2Sum using brute force

const twoSum = (arr, k) => {
    let count = 0
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] === k) {
                console.log([i, j])
                count++
            }
        }
    }
    if(count === 0) {
        console.log([])
    }
}

const arr = [1, 2, 3, 4, 5]
const k = 6

twoSum(arr, k)