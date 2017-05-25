
import React, { PureComponent } from 'react';

export class Timer extends PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.state={
  //     name:props.name,
  //     hours:Math.floor(props.time/(Math.pow(60,2))),
  //     minutes:Math.floor(props.time/60)%60,
  //     seconds:props.time%60
  //   }
  // }
  //
  // componentWillReceiveProps(newProps) {
  //   this.setState({
  //     hours:Math.floor(newProps.time/(Math.pow(60,2))),
  //     minutes:Math.floor(newProps.time/60)%60,
  //     seconds: newProps.time%60,
  //     name: newProps.name});
  // }

  render () {
    return (
      <div>
        <h1>{this.props.name}</h1>

        <p>{Math.floor(this.props.time/(Math.pow(60,2)))} : {Math.floor(this.props.time/60)%60} : {this.props.time%60}</p>
      </div>

    );
  }
}
