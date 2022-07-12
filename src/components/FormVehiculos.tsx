import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useCalculate } from '../hooks/useCalculate'
import useForm from '../hooks/useForm'
import { vehicle } from '../interfaces/propsUseCalculate.interface'

import SelectVehiculo from './SelectVehiculo'

const FormVehiculos = () => {
  const [vehicle, setVehicle]: [vehicle: vehicle, setVehicle: Function] =
    useState('Coche')
  const [formValue, handleInputChange]: any = useForm({ placa: '', dias: '0' })
  const { placa, dias } = formValue
  const { total } = useCalculate({ vehicle, dias })
  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log({ total })
    alert(total)
  }

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="disabledSelect">Seleccione un vehiculo</Form.Label>
        <SelectVehiculo setVehicle={setVehicle} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="disabledTextInput">Dias alquilar</Form.Label>
        <input
          type="text"
          name="placa"
          placeholder="Placa"
          autoComplete="off"
          onChange={handleInputChange}
          value={placa}
        />
        <Form.Label htmlFor="disabledTextInput">Ingresar Placa </Form.Label>
        <input
          type="text"
          name="dias"
          placeholder="Dias"
          autoComplete="off"
          onChange={handleInputChange}
          value={dias}
        />
      </Form.Group>

      <Button onClick={handleSubmit} type="submit">
        Calcular
      </Button>
    </Form>
  )
}

export default FormVehiculos
