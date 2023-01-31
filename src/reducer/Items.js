
function Items(props) {
  const { onDelete, items } = props

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item} <button onClick={() => onDelete(index)}>X</button>
        </li>
      ))}
    </ul>
  )
}

export default Items
