import { useState

} from "react";
import List from "./List"
import Table from "./Table"
import Text from "./Text"

import banana from "./banana.png";

function Conditional(props) {

  const [showImage, setShowImage] = useState(true)

  const data = [
    "milk", "eggs", "bread", "apples", "bananas", "chicken", "pasta"
  ]

  return(
    <>
      <button onClick={ () => setShowImage(!showImage)}>Toggle image</button>
      <br/>
      { showImage && <img src={banana}/> }
      <br/>
      <button>List</button>
      <button>Table</button>
      <button>Text</button>
      <br/>
      <List data={data}/>
      <Table data={data}/>
      <Text data={data}/>
    </>
  )
}

export default Conditional
