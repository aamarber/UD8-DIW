import Calendar from './Calendar'
import './styles/app.css'

function App() {
  return (
    <div className="app">
      <h1>Super calendar</h1>
      <Calendar year={2222} month={1}/>
    </div>
  )
}

export default App

