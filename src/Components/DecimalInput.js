import React from "react"

function DecimalInput(props) {
    return (
        <div>
            <div className="group">
                <input 
                    type="text"
                    className="decimal-input centered"
                    readOnly={true}
                    placeholder="Insira um valor acima"
                    value={props.decimalValue === undefined ? "Valor Inválido" : props.decimalValue}
                    style={{color: props.decimalValue === undefined ? "red" : "white"}}
                />
            </div>
        </div>
    )
}

export default DecimalInput