import React from 'react';
import './App.css';
import Childtwo from './childtwo';
import Childone from './childone';

class App extends React.Component {

  state = {
    bg : 'white'
   }


  check=(clr)=>{
    this.setState({bg : clr})
  }
    
  render() {
    return (
      <div className="App">
      Parent
      <Childone clr={this.state.bg}/>
     <Childtwo fun={this.check}/>
 
      </div>
    );
  }
}
export default App;
