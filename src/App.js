import { Fragment } from 'react'
import CalendarTitle from './CalendarTitle'


function Calendar(props) {
  const { year, month } = props

  const days = [
    <div key='1'>1</div>,
    <div key='2'>2</div>,
    <div key='3'>3</div>
  ]

  return (
    <div>
      <CalendarTitle month={month} year={year}/>
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
      <Calendar year={2222} month={1}/>
    </Fragment>
  )
}

export default App

