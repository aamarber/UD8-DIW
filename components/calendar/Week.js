
import Day from "./Day"
import './styles/week.scss';

function Week(props) {
  const { days, selected } = props
  const { click } = props

  return (
    <div className='week'>
      {
        days.map((day, index) =>
          <Day key={index} number={day} selected={day==selected} click={click} weekend={index == 5 || index == 6}/>
        )
      }
    </div>
  )
}

export default Week
