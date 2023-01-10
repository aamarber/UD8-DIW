import './styles/calendar.css'
import CalendarTitle from './CalendarTitle'

function Calendar(props) {
  const { year, month } = props
  const holidays = (month == 7) || (month == 8)

  const days = [
    <div key='1'>1</div>,
    <div key='2'>2</div>,
    <div key='3'>3</div>
  ]

  return (
    <div className={`calendar ${holidays ? 'holidays' : ''}`}>
      <CalendarTitle month={month} year={year}/>
      <div id='days_container'>
        {days}
      </div>
    </div>
  )
}

export default Calendar
