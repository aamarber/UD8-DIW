function firstDayOfMonth(month, year) {
  return new Date(Date.UTC(year, month-1, 1))
}

function weekDay(day) {
  return day.getUTCDay() == 0 ? 7 : day.getUTCDay()
}

function getWeeksInMonth(month, year) {
  const MONDAY = 1

  let date = firstDayOfMonth(month, year)
  let weeks = []
  let week = []

  for (let i = MONDAY; i < weekDay(date); i++) {
    week.push(null)
  }

  while (date.getMonth() === month-1) {
      while (week.length < 7) {
          week.push(date.getUTCDate())
          date.setDate(date.getUTCDate() + 1)
          if (date.getMonth() !== month-1) {
            while (week.length < 7) {
                week.push(null)
            }
            break
          }
      }
      weeks.push(week)
      week = []
  }

  return weeks
}

export {
  getWeeksInMonth
}
