function Day(props) {
  const { number, weekend } = props
  return (
    <div className={`day ${weekend ? 'weekend' : ''}`}>
      {number ? number : ''}
    </div>
  )
}

export default Day
