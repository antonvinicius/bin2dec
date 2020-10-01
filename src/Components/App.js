import React from "react"

import '../index.css'
import Header from "./Header"
import BinaryInput from "./BinaryInput"
import Footer from "./Footer"

function App() {
  return (
    <div className="app">
      <div className="box">
        <Header />
        <BinaryInput />
      </div>
      <Footer />
    </div>
  )
}

export default App