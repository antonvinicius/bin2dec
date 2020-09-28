import React from "react"

function DecimalInput(props) {
    return (
        <div>
            <h2>Decimal</h2>
            <input type="text" readOnly={true} value={props.decimalValue === undefined ? "Valor não binário, insira 0 ou 1" : props.decimalValue}/>
        </div>
    )
}

export default DecimalInput