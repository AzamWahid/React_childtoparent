import React from 'react';
import './App.css';

class Child extends React.Component {
    state = {
        bg: 'purple'
      }
    
  render() {
    return (
      <div className="App" >
        <div>
        <button onClick={() => this.check('green')}> Green </button>
          <button onClick={() => this.check('white')}> White </button>
          <button onClick={() => this.check('red')}> red </button>
          <button onClick={() => this.check('black')}> black </button>
        </div>
      </div>
    );
  }
}
export default Child;

