import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import './index.css'
import FormVehiculos from './components/FormVehiculos'
import Table from './components/Table'

function App() {
  const [tableDate, setTableDate] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col-4 mt-5">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="col">
              <FormVehiculos setTableDate={setTableDate} />
            </div>
          </div>
          <div className="row ">
            <div className="col">
              <Table data={tableDate} />
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
