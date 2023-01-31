
function Items(props) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <li key={index}>
          {item} <button>X</button>
        </li>
      ))}
    </ul>
  )
}

export default Items
