import { Fragment } from 'react'

function suma(a,b) {
  return a + b;
}

function Calendario() {
  const title = <h1>Enero {suma(2000,222)}</h1>
  const days = [
    <div key='1'>1</div>,
    <div key='2'>2</div>,
    <div key='3'>3</div>
  ]

  return (
    <div>
      <div id='title_container'>
        {title}
      </div>
      <div id='days_container'>
        {days}
      </div>
    </div>
  )
}

function App() {
  return (
    <Fragment>
      <h1>Super calendar</h1>
      <Calendario />
    </Fragment>
  )
}

export default App

