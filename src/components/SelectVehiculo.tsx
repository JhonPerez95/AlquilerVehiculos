import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { vehicle } from '../interfaces/propsUseCalculate.interface'



const SelectVehiculo = ({ setVehicle }: any) => {
  const [vehiculos, setvehiculos] = useState(['Coche', 'Microbus', 'Furgoneta', 'Camion'])
  const handleChange = (e: any) => {
    const value : vehicle = e.target.value ?? 'Coche'
    setVehicle(value)
  }

  return (
    <Form.Select aria-label="Default select example" onClick={handleChange}>
      {vehiculos.map((vehiculos, id) => (
        <option key={id} value={vehiculos}>
          {vehiculos}
        </option>
      ))}
    </Form.Select>
  )
}

export default SelectVehiculo
