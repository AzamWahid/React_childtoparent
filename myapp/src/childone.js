import React from 'react';
import './App.css';
import childtwo from './childtwo'

class Childone extends React.Component {
   
    
  render() {
    return (
      <div className="App" >
        <div style={{backgroundColor:this.props.clr}}>
     <h1>   Child One</h1>
        </div>
      </div>
    );
  }
}
export default Childone;

