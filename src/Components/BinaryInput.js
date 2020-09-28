import React from "react"


import BinaryConverter from "../Util/BinaryConverter"
import DecimalInput from "./DecimalInput"

class BinaryInput extends React.Component {
    constructor() {
        super()
        this.state = {
            decimalValue: ""
        }
    }

    render(){
        return (
            <div>
                <input type="text" className="pretty-input" maxLength={8} onChange={event => {this.setState({decimalValue: BinaryConverter(event.target.value)})}}/>
                <DecimalInput decimalValue={this.state.decimalValue} />
            </div>
        )
    }
}

export default BinaryInput