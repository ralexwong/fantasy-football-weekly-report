import React from "react";
import { connect } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ScoreboardRow from '../ScoreboardRow';

class Scoreboard extends React.Component {

    marginAdjust = (matchupsLength) => {
        if (matchupsLength > 5) {
            return "'margin-top': '50px'"
        }
        if (matchupsLength === 5) {
            return "'margin-top': '70px'"
        }
        if (matchupsLength < 5) {
            return "'margin-top': '100px'"
        }
    }

    render() {
        return (
            <Col className="scoreboard">
                <Container>
                    <Row>
                        <Col>
                            <p className="scoreboard__title">SCOREBOARD</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="scoreboard__week">
                            <p>Week {this.props.week}</p>
                        </Col>
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
                </Container>
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