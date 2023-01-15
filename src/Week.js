
import Day from "./Day"

function Week(props) {
  const { days } = props

  return (
    <div className='week'>
      {
        days.map((day, index) =>
          <Day key={index} number={day} weekend={index == 5 || index == 6}/>
        )
      }
    </div>
  )
}

export default Week
