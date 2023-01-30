
import React from "react"
import CalendarTitle
 from "./CalendarTitle"
class CalendarClass extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      patata: 'patata'
    }
  }

  increment() {
    this.setState({selected: this.state.selected+1})
  }

  decrement() {
    this.setState({selected: this.state.selected-1})
  }

  biIncrementBad() {
    this.setState({selected: this.state.selected+1})
    this.setState({selected: this.state.selected+1})
    console.log(this.state.selected)
  }

  biIncrementGood() {
    this.setState({selected: this.state.selected+1},
      () => this.setState({selected: this.state.selected+1},
          () => console.log(this.state.selected)
      )
    )
  }

  render() {
    return (
      <div>
        <CalendarTitle month={this.props.month} year={this.props.year}/>
        <button onClick={() => this.increment()}>+</button>
        <button onClick={() => this.decrement()}>-</button>
        <br/>
        <button onClick={() => this.biIncrementBad()}>++</button>
        <br/>
        <button onClick={() => this.biIncrementGood()}>++ (Good)</button>
        <h2>{this.state.selected}</h2>
        <h2>{`Patata: ${this.state.patata}`}</h2>
      </div>
    )
  }

}

export default CalendarClass

