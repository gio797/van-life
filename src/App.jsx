import React from "react"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
