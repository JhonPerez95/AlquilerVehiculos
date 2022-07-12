import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import './index.css'
import FormVehiculos from './components/formVehiculos'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-title">Alquiler de vehiculo</p>
        <FormVehiculos />
      </header>
    </div>
  )
}

export default App
