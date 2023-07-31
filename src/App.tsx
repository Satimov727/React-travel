import React from 'react'
import { Navigation } from './components/Navigation'
import { Route, Routes } from "react-router-dom"
import { MainPage } from "./pages/MainPage"
import { Instruction } from "./pages/Instruction"

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/conditions" element={<Instruction />} />
      </Routes>
    </>
  )
}

export default App
