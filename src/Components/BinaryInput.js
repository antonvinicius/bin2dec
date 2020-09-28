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
                <h2>Binário</h2>
                <input type="text" maxLength={8} onChange={event => {this.setState({decimalValue: BinaryConverter(event.target.value)})}}/>
                <DecimalInput decimalValue={this.state.decimalValue} />
            </div>
        )
    }
}

export default BinaryInput