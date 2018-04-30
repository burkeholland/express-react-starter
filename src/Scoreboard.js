import React from 'react';

export const Scoreboard = (props) => {
    // console.log('test', props.fixture)
    const {awayTeamName, homeTeamName, status, date } = props.fixture;
    const { goalsAwayTeam, goalsHomeTeam } = props.fixture.result;

    const year = date.slice(0,4);
    const month = date.slice(6,7);
    const day = date.slice(9,10);

    return (
        <div className="score-child">
            <div className="scoreboard">
                    <div className="home-team">{homeTeamName}</div>
                    <div className="time">{status}</div>
                    <div className="away-team">{awayTeamName}</div>
                    <div className="home-score"><h1>{goalsHomeTeam}</h1></div>
                    <div className="away-score"><h1>{goalsAwayTeam}</h1></div>
                <div className="btn btn-success"> <p> {month} - {day} - {year}</p>
                </div>
                    {/* <div className="home-goals"><i className="fas fa-futbol"></i>33 Neymar <i className="fas fa-futbol"></i>37 Coutinho</div>
                    <div className="goals">G</div>
                    <div className="away-goals"><i className="fas fa-futbol"></i>22 Mueller</div>

                    <div className="home-fouls"><i className="fas fa-file amarillo"></i>12 Marcello</div>
                    <div className="fouls">F</div>
                    <div className="away-fouls"><i className="fas fa-file amarillo"></i>52 Ozil</div> */}
                {/* <div className ="information">
                        <div className="stadium"></div>
                        <div className="weather"></div>
                </div> */}
            </div>
        </div>)
    }

