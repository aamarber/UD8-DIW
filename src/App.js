import Calendar from './Calendar'
import CalendarClass from './CalendarClass'
import './styles/app.css'

function App() {
  return (
    <div className="app">
      <h1>Super calendar</h1>
      <CalendarClass year={2023} month={1}/>
      <Calendar year={2023} month={1}/>
    </div>
  )
}

export default App

