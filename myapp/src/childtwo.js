import React from 'react';
import './App.css';
import Childone from './childone'

class Childtwo extends React.Component {



  render() {
    return (
      <div className="App" >
     
      <div>
      child two
      <button onClick={() => this.props.fun('green')}> Green </button>
        <button onClick={() => this.props.fun('purple')}> purple </button>
        <button onClick={() => this.props.fun('red')}> red </button>
        <button onClick={() => this.props.fun('orange')}> Orange </button>
      </div>
    </div>
    );
  }
}
export default Childtwo;

