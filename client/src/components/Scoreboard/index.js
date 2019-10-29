import React from "react";
import { connect } from 'react-redux';

import "./style.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ScoreboardRow from '../ScoreboardRow';

class Scoreboard extends React.Component {

    render() {
        return (
            <Col className="col-6">
                <Row>
                    <p id="scoreboard">SCOREBOARD</p>
                </Row>
                <Row>
                    <div id="scoreboardWeek">
                        <p>Week {this.props.week}</p>
                    </div>
                </Row>

                {!this.props.matchups ? 
                (<div></div>) 
                : 
                (this.props.matchups.map(matchup => (
                    <ScoreboardRow 
                        key={matchup.matchup_id}
                        matchup_id={matchup.matchup_id}
                        points1={matchup.points1}
                        points2={matchup.points2}
                        roster1={matchup.roster1}
                        roster2={matchup.roster2}
                    />
                )) 
              )}
            </Col>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        league_info: state.sleeper.league_info, 
        points: state.sleeper.points,
        week: state.sleeper.week,
        matchups: state.sleeper.matchups
    }
}

export default connect(mapStateToProps, {  })(Scoreboard)