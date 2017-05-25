import React, { Component } from 'react';
import {Timer} from './Timer';


export class PlayerTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.time
    }
    this.stopTime = this.stopTime.bind(this);
  }

  timerCount() {
    this.timerID = setInterval(
      () => {
          this.setState({
            time: this.state.time-1
          }
        );
      }, 1000
    );
  }

  stopTime() {
    clearInterval(this.timerID);
  }

  componentDidMount() {
    if(this.props.active) {
      this.timerCount()
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.active) {
      this.timerCount();
    } else {
      this.stopTime();
    }
  }


  render() {
    return (
      <div>
      <Timer
        name={this.props.name}
        time={this.state.time}
      />
      </div>
    );
  }
}
