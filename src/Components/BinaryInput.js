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
        input.setAttribute('maxLength', 8)
        let binaryValue = input.value
        let digits = binaryValue.toString().split('').map(Number)
        while (digits.length > 8) {
            digits.pop()
        }
        digits.reverse()
        binaryValue = this.getStringOfArray(digits)

        this.setState({ decimalValue: BinaryConverter(binaryValue) })
        this.setState({ binaryValue: binaryValue })
    }

    getStringOfArray(array) {
        let string = ""
        for (const i of array) {
            string += i
        }
        return Number(string)
    }

    render() {
        return (
            <div>
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