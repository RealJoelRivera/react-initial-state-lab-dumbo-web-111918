// your Bomb code here!
import React from 'react';
import ReactDOM from 'react-dom';

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: props.initialCount,
    };
  }

  render() {
    return (
      <h1>
        {this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`}
      </h1>
    );
  }
}

export default Bomb;
