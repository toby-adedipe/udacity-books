import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import CurrentlyReading from './CurrentlyReading';
import Read from './Read';
import WantToRead from './WantToRead';
import { Route } from 'react-router-dom';

class  App extends Component {
  
  render(){
    return (
      <div className="App">
        <Route exact path ='/' render={()=>(
          <div>
            <Header />
            <CurrentlyReading />
            <Read />
            <WantToRead />
          </div>
        )}
        />
      </div>
    );
  }
}

export default App;
