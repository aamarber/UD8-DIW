function Table(props){
  return(
    <table>
      <thead>
        <tr>
          <th>Item</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, index) => {
          return <tr key={index}><td>{item}</td></tr>
        })}
      </tbody>
    </table>
  )
}

export default Table
