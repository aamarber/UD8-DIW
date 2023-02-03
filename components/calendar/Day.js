import './styles/day.scss';

function Day(props) {
  const { number } = props
  const { weekend=false, selected=false } = props
  const { click } = props

  const classes = ['day']
  if(weekend) classes.push('weekend')
  if(selected) classes.push('selected')

  return (
    <div onClick={() => number && click?.(number)} className={classes.join(' ')}>
      {number ? number : ''}
    </div>
  )
}

export default Day
