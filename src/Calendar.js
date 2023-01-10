import './styles/calendar.css'
import CalendarTitle from './CalendarTitle'

const weekendStyle = {
  backgroundColor: 'red',
  fontWeight: 'bold',
  fontSize: 20
}

function Calendar(props) {
  const { year, month } = props
  const holidays = (month == 7) || (month == 8)

  const days = [
    <div key='1'>1</div>,
    <div key='2'>2</div>,
    <div key='3'>3</div>,
    <div key='4'>4</div>,
    <div key='5'>5</div>,
    <div key='6' style={weekendStyle}>6</div>,
    <div key='7' style={weekendStyle}>7</div>
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
