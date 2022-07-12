import { PropsUseCalculate } from '../interfaces/propsUseCalculate.interface'
import { typeVehicle } from '../libs/typeVehiculos'



export const useCalculate = ({ vehicle, dias }: PropsUseCalculate) => {
  const vehicleObj = typeVehicle[vehicle] 
  const total = vehicleObj.value * parseInt(dias) + vehicleObj.add  

  return { total }
}
