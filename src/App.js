import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './Navbar';
import LaLiga from './LaLiga';
import Champions from './ligas/Champions';
import EPL from './ligas/EPL';
import SerieA from './ligas/SerieA';

class App extends Component {
  constructor() {
    super();
    this.state = { message: '' };
  }

  componentDidMount() {
    fetch('/api/message')
      .then(response => response.json())
      .then(json => this.setState({ message: json }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.message}</h2>
        </div>
        <NavBar />
        <main>
          <Switch>
            <Route path="/champions" component={Champions} />
            <Route path="/laliga" component={LaLiga} />
            <Route path="/epl" component={EPL} />
            <Route path="/seriea" component={SerieA} />
          </Switch>
        </main>
        {/* <LaLiga /> */}
      </div>
    );
  }
}

export default App;
