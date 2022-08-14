const fact = (n) => {
    if(n === 1) {
        return BigInt(1)
    }
    return BigInt(n) * fact(n-1)
}

console.log(fact(30))