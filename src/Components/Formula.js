import React from "react"

class Formula extends React.Component {
    constructor(){
        super()
    }

    render() {
        let digits = this.props.binaryValue.toString().split('').map(Number) //get digits from binary number
        digits.reverse() //Reverse it again to be in correct order of the input
        let formulaTxt = constructFormula(digits, this.props.decimalValue)
        return (
            <div>
                <h3 className="formula">{formulaTxt}</h3>
            </div>
        )
    }
}

function constructFormula(digits, decimalValue) {
    if (decimalValue == 0)
        return "0"
    else if (!decimalValue) //If value isn't in binary form
        return "Valor inválido"
    let result = `(${decimalValue})₂ = `
    if (digits.length !== 0) {
        for (const [i, v] of digits.entries()) { //Get index and value from array
            result += `(${v})*2${powerFormat(i)} `
            if (i !== digits.length - 1) //Last value doesn't receive a "+" sign afterwards
                result += " + "
        }
    }
    return result
}
//This functions return a power format of a certain index
function powerFormat(i) {
    let powerFormat = ""
    switch (i) {
        case 0:
            powerFormat = '⁰'
            break;
        case 1:
            powerFormat = '¹'
            break;
        case 2:
            powerFormat = '²'
            break;
        case 3:
            powerFormat = '³'
            break;
        case 4:
            powerFormat = '⁴'
            break;
        case 5:
            powerFormat = '⁵'
            break;
        case 6:
            powerFormat = '⁶'
            break;
        case 7:
            powerFormat = '⁷'
            break;
        default:
            break;
    }
    return powerFormat
}

export default Formula