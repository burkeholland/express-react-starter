import React, { Component } from 'react';
import {Scoreboard} from '../Scoreboard';

export default class Liga extends Component {
  constructor() {
    super();
    this.state = { 
      lastWeek: [],
      nextWeek: [],
      today: [],
      matchday: 0,
      display: [],
    };
    this.clickLastWeek = this.clickLastWeek.bind(this);
    this.clickNextWeek = this.clickNextWeek.bind(this);
    this.clickMatchday = this.clickMatchday.bind(this);
  }

  componentDidMount() {
    fetch('/api/laliga/matchday')
      .then(response => {
        return response.json()})
      .then(json => this.setState({ matchday: json.matchday }));

    fetch('/api/laliga/prev')
      .then(response => {
        return response.json()})
      .then(json => this.setState({ lastWeek: json, display: json })
      );

    fetch('/api/laliga/next')
      .then(response => {
        return response.json()})
      .then(json => this.setState( {nextWeek: json} ));
  }

  clickLastWeekA() {
    fetch('/api/laliga/prev')
      .then(response => {
        return response.json()})
      .then(json => this.setState({today: json} ));
      // console.log(this.state)
  }

  clickLastWeek() {
    this.setState({display: this.state.lastWeek} );
  }

  clickMatchday() {
    let matchdayId = this.state.matchday;
    fetch(`/api/laliga/today/${matchdayId}`)
    .then(response => {
      return response.json()})
    .then(json => this.setState( {today: json} ))
    .then(()=> this.setState({display: this.state.today}));
  }

  clickNextWeek() {
    this.setState({display: this.state.nextWeek} );
  }

  render() {
      // console.log(this.state);
      const areFixtures = this.state.display.length > 0;
      const { display } = this.state;
      const { today, lastWeek, nextWeek } = this.state;
      if (areFixtures) {
        return (
          <div>
            <div className="button-box">
              <button className="btn btn-primary button-padder" onClick={this.clickLastWeek}> Last Week's Games </button>
              <button className="btn btn-primary button-padder" onClick={this.clickMatchday}> Matchday Games </button>
              <button className="btn btn-primary button-padder" onClick={this.clickNextWeek}> Next Week's Games </button>
            </div>
            <div className="score-box">
            {display.map(fixture => {
              return  <Scoreboard key={fixture.id} fixture={fixture} />
              }
            )}
            </div>
          </div>
        )
      }
        return (
        <div>
            <div className="button-box">
              <button className="btn btn-primary button-padder" onClick={this.clickLastWeek}> Last Week's Games </button>
              <button className="btn btn-primary button-padder" onClick={this.clickMatchday}> Matchday Games </button>
              <button className="btn btn-primary button-padder" onClick={this.clickNextWeek}> Next Week's Games </button>
            </div>
            <p>Loading... Hey Ho, Let's Go!</p>
        </div>
    )
    }
}