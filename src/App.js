import React, { Component } from 'react';
import './App.css';
import Buttons from './Buttons';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <header className="App-header">
            <div className= "logo" > <img  src ={require('./logo5.svg')}/> </div>
          </header>

          <div className = "buttons-container">
            <Buttons/>
          </div>
          <div className = "footer">
            <div> Copyright © Renaissance Code Development 2018</div>
          </div>
        </div>


      </div>

    );
  }
}

export default App;
