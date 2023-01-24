function List(props) {
  return(
    <ul>
      {props.data.map((item, index) => {
        return <li key={index}>{item}</li>
      })}
    </ul>
  )
}

export default List
