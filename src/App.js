import { Fragment } from "react"

function Calendario() {
  return (
    <div>
      <div id='titulo'>
        <h1>Enero 2222</h1>
      </div>
      <div id='dias'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Fragment>
      <h1>Super calendario</h1>
      <Calendario />
    </Fragment>
  )
}

export default App

