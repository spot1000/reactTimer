import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import {Display} from './components/Display'
import {PlayerTime} from './components/playerTime';
import {Button} from './components/Button';

class App extends Component {

  constructor() {
    super();
    this.state = {
      playerOne : 'Adam',
      playerTwo : 'Mark',
      time : 974,
      p1active:true,
      p2active:false,
      message : ''
    }
    this.switchActive = this.switchActive.bind(this);
  }

  switchActive() {
    if(this.state.p1active) {
      this.setState({
        p2active:true,
        p1active:false
      });
    } else {
      this.setState({
        p2active:false,
        p1active:true
      });
    }

    // this.setState({
    //   playerOne:'Mark'
    // })


  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Test Timer</h2>
        </div>
        <div>
          <PlayerTime
            name={this.state.playerOne}
            time={this.state.time/2}
            active={this.state.p1active}
          />
          <PlayerTime
            name={this.state.playerTwo}
            time={this.state.time/2}
            active={this.state.p2active}
          />
          <Button
            onClick={this.switchActive}
            name='switch'
          />
        </div>
      </div>
    );
  }
}

export default App;
