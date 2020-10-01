import React from "react"

function Formula(props) {
    let digits = props.binaryValue.toString().split('').map(Number)
    digits.reverse()
    let formulaTxt = constructFormula(digits, props.decimalValue)
    return (
        <div>
            <h3 className="formula">{constructFormula(digits, props.decimalValue)}</h3>
        </div>
    )
}

function constructFormula(digits, decimalValue) {
    if(!decimalValue)
        return "Valor inválido"
    let result = `(${decimalValue})₂ = `
    if (digits.length != 0) {
        for (const [i, v] of digits.entries()) {
            result += `(${v})*2${powerFormat(i)} `
            if (i != digits.length - 1)
                result += " + "
        }
    }

    return result
}

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