import { DataTable } from '../interfaces/PropsUseCalculate.interface'

const Table = ({ data }: any) => {
  return (
    <table className="table table-dark table-sm mt-5">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Tipo Vehiculo</th>
          <th scope="col">Placa</th>
          <th scope="col">Dias</th>
          <th scope="col">Total Pagar</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: DataTable, id: number) => (
          <tr key={id}>
            <th scope="row">{id + 1}</th>
            <td>{item.vehicle}</td>
            <td>{item.placa}</td>
            <td>{item.dias}</td>
            <td>{item.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
