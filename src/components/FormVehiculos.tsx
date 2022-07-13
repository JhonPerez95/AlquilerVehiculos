import { useState } from 'react'
import { useCalculate } from '../hooks/useCalculate'
import useForm from '../hooks/useForm'
import {
  PropsFormVehicule,
  vehicle,
} from '../interfaces/propsUseCalculate.interface'

import SelectVehiculo from './SelectVehiculo'

const FormVehiculos = ({ setTableDate }: PropsFormVehicule) => {
  const [vehicle, setVehicle]: [vehicle: vehicle, setVehicle: Function] =
    useState('Coche')

  // const [tableDate, setTableDate] = useState([])
  const [formValue, handleInputChange]: any = useForm({ placa: '', dias: '0' })
  const { placa, dias } = formValue
  const { total } = useCalculate({ vehicle, dias })
  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log({ total })
    // tableDate.push({ vehicle, dias, placa, total })
    setTableDate((prev: []) => [...prev, { vehicle, dias, placa, total }])
  }

  return (
    <form className="mt-2">
      <div className="form-row">
        <div className="form-group col-md-8 mt-2">
          <label>ALQUILER DE VEHICULOS</label>
        </div>
        <div className="form-group col-md-8 mt-2">
          <label>Tipo de vehiculo</label>
          <SelectVehiculo setVehicle={setVehicle} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-8 mt-2">
          <label>Placa del Vehiculo</label>
          <input
            type="text"
            className="form-control"
            name="placa"
            placeholder="XDF-30E"
            onChange={handleInputChange}
            value={placa}
          />
        </div>
        <div className="form-group col-md-8 mt-2">
          <label>Dias Alquilar</label>
          <input
            type="text"
            className="form-control"
            name="dias"
            placeholder="Dias alquilar"
            onChange={handleInputChange}
            value={dias}
          />
        </div>
        <div className="form-group col-md-8  mt-3">
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Calcular
          </button>
        </div>
      </div>
    </form>
  )
}

export default FormVehiculos
