import React from "react";
import CalendarTitle  from "./CalendarTitle";

class CalendarClass extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CalendarTitle month={this.props.month} year={this.props.year}/>
        <h2>{this.state.selected}</h2>
      </div>
    );
  }

}

export default CalendarClass;

