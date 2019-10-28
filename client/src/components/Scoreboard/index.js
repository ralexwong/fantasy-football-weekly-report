import React from "react";
import { connect } from 'react-redux';

import "./style.css";
import Row from 'react-bootstrap/Row';
import ScoreboardRow from '../ScoreboardRow';

class Scoreboard extends React.Component {

    render() {
        return (
            <div>
                <Row>
                    <p id="scoreboard">SCOREBOARD</p>
                </Row>
                <Row>
                    <div id="scoreboardWeek">
                        <p>Week {this.props.week}</p>
                    </div>
                </Row>
 
                {/* {this.props.points.map(matchup => (
                <ScoreboardRow 
                    key={matchup.id}

                />
              ))}  */}

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        league_info: state.sleeper.league_info, 
        points: state.sleeper.points,
        week: state.sleeper.week
    }
}

export default connect(mapStateToProps, {  })(Scoreboard)