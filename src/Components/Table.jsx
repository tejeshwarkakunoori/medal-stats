import React from 'react'

const Table = ({medalData}) => {
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Year</th>
                <th>Medals</th>
            </tr>
        </thead>
        <tbody>
            {medalData.map((medal) => (
            <tr key={medal.Id}>
                <td>{medal.Id}</td>
                <td>{medal.Year}</td>
                <td>{medal.Medals}</td>
            </tr>))}  
        </tbody>
      </table>
    </div>
  )
}

export default Table