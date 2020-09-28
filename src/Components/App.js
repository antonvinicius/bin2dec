import React from "react"

import '../index.css'
import Header from "./Header"
import BinaryInput from "./BinaryInput"
import DecimalInput from "./DecimalInput"

function App() {
  return (
    <div className="box">
      <Header />
      <BinaryInput />
    </div>
  )
}

export default App