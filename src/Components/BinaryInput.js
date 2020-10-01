import React from "react"


import BinaryConverter from "../Util/BinaryConverter"
import DecimalInput from "./DecimalInput"
import Formula from "./Formula"

class BinaryInput extends React.Component {
    constructor() {
        super()
        this.state = {
            decimalValue: "",
            binaryValue: "",
            showFormula: false
        }

        this.setDecBin = this.setDecBin.bind(this)
    }

    setDecBin() {
        const input = document.getElementById('binaryInput')
        let binaryValue = input.value
        let digits = binaryValue.toString().split('').map(Number) // Transform binary value to array of digits

        input.setAttribute('maxLength', 8)
        while (digits.length > 8) { // Force length of values to be 8
            digits.pop()
        }
        
        digits.reverse() //Reverse it cause input is backwards
        binaryValue = this.getNumberOfDigits(digits) //Return it as a proper Number

        this.setState({ decimalValue: BinaryConverter(binaryValue) })
        this.setState({ binaryValue: binaryValue })
    }

    getNumberOfDigits(array) {
        let string = ""
        for (const i of array) {
            string += i
        }
        return Number(string)
    }

    render() {
        return (
            <div>
                {/* Inputs for binary and decimal value */}
                <input
                    id="binaryInput"
                    type="text"
                    className="pretty-input right"
                    maxLength={8}
                    onChange={this.setDecBin}
                />
                <DecimalInput
                    decimalValue={this.state.decimalValue}
                />

                {/* Conditional Rendering to show formula*/}
                <div className="container">
                    <button className="btn btn-4" onClick={() => this.setState({ showFormula: this.state.showFormula ? false : true })}>
                        {this.state.showFormula ? 'Ocultar Formula' : 'Mostrar Formula'}
                    </button>
                </div>
                {this.state.showFormula ? <Formula
                    binaryValue={this.state.binaryValue}
                    decimalValue={this.state.decimalValue}
                /> : ""}
            </div>
        )
    }
}

export default BinaryInput