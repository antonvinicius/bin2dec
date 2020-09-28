export default (n) => {
    if(isBinary(n)){
        let base = 1
        let decimal = 0
    
        for (let i = n; i >= 1; i = Math.round(i / 10)) {
            let lastDigit = i % 10
            decimal += lastDigit * base
            base *= 2
        }
    
        return decimal
    }else {
        return undefined
    }
}

function isBinary(n) {
    let isBinary = true
    let digits = n.toString().split('')
    let numDigits = digits.map(Number)
    numDigits.forEach(num => {
        if (num > 1)
            isBinary = false
    })

    return isBinary
}