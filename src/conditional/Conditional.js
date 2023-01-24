import List from "./List"
import Table from "./Table"
import Text from "./Text"

function Conditional(props) {

  const data = [
    "milk", "eggs", "bread", "apples", "bananas", "chicken", "pasta"
  ]

  return(
    <>
      <button>List</button>
      <button>Table</button>
      <button>Text</button>
      <List data={data}/>
      <Table data={data}/>
      <Text data={data}/>
    </>
  )
}

export default Conditional
