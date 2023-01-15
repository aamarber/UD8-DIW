import './styles/calendar.css'
import CalendarTitle from './CalendarTitle'
import Week from './Week'

import { getWeeksInMonth } from './date_functions'

function Calendar(props) {
  const { year, month } = props
  const holidays = (month == 7) || (month == 8)
  const weeks = getWeeksInMonth(month, year)

  return (
    <div className={`calendar ${holidays ? 'holidays' : ''}`}>
      <CalendarTitle month={month} year={year}/>
      {
        weeks.map((week, index) =>
          <Week key={index} days={week}/>
        )
      }
    </div>
  )
}

export default Calendar
