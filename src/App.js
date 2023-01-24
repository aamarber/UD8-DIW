import Calendar from './calendar/Calendar'
import CalendarClass from './calendar/CalendarClass'
import './styles/app.css'

function App() {
  return (
    <div className="app">
      <h1>Super calendar</h1>
      <Calendar year={2023} month={1}/>
    </div>
  )
}

export default App

