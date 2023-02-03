import './styles/calendarTitle.scss';

function proper(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function CalendarTitle({month, year}) {
  const date = new Date(year, month-1, 1)
  const monthName = proper(date.toLocaleString('default',{ month: 'long' }))

  return (
    <h1 className='calendarTitle'>
      {`${monthName} ${year}`}
    </h1>
  )
}

export default CalendarTitle
