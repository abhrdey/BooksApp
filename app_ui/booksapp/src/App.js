import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import Home from './Components/Home/Home'
import Header from './Components/Header'
import Dropbox from './Components/Dropbox/Dropbox'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/dropbox' component={Dropbox} />
        </Switch>
      </div>
    );
  }
}

export default App;
