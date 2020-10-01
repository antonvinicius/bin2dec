import React from "react"

function Header() {
    return (
        <div className="centered">
            <h2 className="title">Bin2Dec</h2>
            <input type="checkbox" id="toggle" />
            <label htmlFor="toggle">Como Funciona</label>

            <dialog >
                <h4>Este é um conversor de binário para decimal de 8 bits ou 1 byte. Isto quer dizer que Você só poderá colocar 8 digitos para converter para decimal.</h4>
                <p>O sistema binário ou de base 2 é um sistema de numeração posicional em que todas as quantidades se representam com base em dois números, ou seja, zero e um. Os computadores digitais trabalham internamente com dois níveis de tensão, pelo que o seu sistema de numeração natural é o sistema binário.</p>
                <p>Insira no campo valores em binário para ver seu correspondente em decimal</p>
                <p><a href="https://pt.wikipedia.org/wiki/Sistema_de_numera%C3%A7%C3%A3o_bin%C3%A1rio">Mais detalhes</a></p>
                <label htmlFor="toggle">Fechar</label>
            </dialog>
        </div>
    )
}

export default Header