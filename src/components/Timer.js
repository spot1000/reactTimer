
import React, { Component } from 'react';
import {Display} from './Display'


export class Timer extends Component {
  constructor(props) {
    super(props);
    this.state={
      name:props.name,
      hours:Math.floor(props.time/(Math.pow(60,2))),
      minutes:Math.floor(props.time/60)%60,
      seconds:props.time%60
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      hours:Math.floor(newProps.time/(Math.pow(60,2))),
      minutes:Math.floor(newProps.time/60)%60,
      seconds: newProps.time%60,
      name: newProps.name});
  }

  render () {
    const myState=this.state
    return (
      <div>
        <h1>{this.state.time}</h1>
        <Display objectState={myState} />
      </div>
    );
  }
}