import { PropsUseCalculate } from '../interfaces/PropsUseCalculate.interface'
import { typeVehicle } from '../libs/typeVehiculos'

export const useCalculate = ({ vehicle, dias }: PropsUseCalculate) => {
  const vehicleObj = typeVehicle[vehicle]

  // base + value * dias + add
  const total =
    (vehicleObj.base + vehicleObj.value) * parseInt(dias) + vehicleObj.add

  return { total }
}
