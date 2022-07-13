export type vehicle = 'Coche' | 'Microbus' | 'Furgoneta' | 'Camion'
export interface PropsUseCalculate {
  vehicle: vehicle
  dias: string
}

export interface PropsFormVehicule {
  setTableDate: Function
}

export interface PropsTable {
  data: []
}

export interface DataTable {
  vehicle: string
  placa: string
  dias: string
  total: number
}
