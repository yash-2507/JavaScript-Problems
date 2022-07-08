const merge = (arr1, arr2) => {
    let a = arr1.length-1
    let b = arr2.length-1
    let arr3 = new Array(a+b+1).fill(0)
    let c = a+b+1
    while(a >= 0 && b >= 0) {
        if(arr1[a] > arr2[b]) {
            arr3[c] = arr1[a]
            c--
            a--
        } else {
            arr3[c] = arr2[b] 
            b--
            c--
        }
    }
    while(a >= 0) {
        arr3[c] = arr1[a]
        a--
        c--
    }
    while(b >= 0) {
        arr3[c] = arr2[b]
        b--
        c--
    }
    return arr3
}

let arr1 = [-1, 4, 9]
let arr2 = [0, 5, 6, 8]
console.log(merge(arr1, arr2))
