import React from "react";
import { connect } from 'react-redux';

import { Container, Row, Col } from "reactstrap"
import ScoreboardRow from '../ScoreboardRow';

class Scoreboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: 0,
            height: 0
        }
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };


    render() {
        console.log(this.props.matchups)

        let matchups = [];
        if (this.props.espnReport) {
            matchups = this.props.espnMatchups
        } else if (this.props.sleeperReport) {
            matchups = this.props.sleeperMatchups
        }

        let week = "";
        if (this.props.espnReport) {
            week = this.props.espnWeek
        } else if (this.props.sleeperReport) {
            week = this.props.sleeperWeek;
        }

        if (this.state.width < 575) {
            return (
                <React.Fragment>
                    <Col style={{border: "none"}} className="scoreboard">
                        <Container>
                            <Row>
                                <Col>
                                    <p className="reportTitle reportTitle__scoreboard">SCOREBOARD</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="scoreboard__week">
                                    <p>Week {week}</p>
                                </Col>
                            </Row>

                            {matchups ?
                                (matchups.map(matchup => (
                                    <ScoreboardRow
                                        key={matchup.points1}
                                        points1={matchup.points1}
                                        points2={matchup.points2}
                                        roster1={matchup.roster1}
                                        roster2={matchup.roster2}
                                    />
                                ))
                                ) :
                                (<div></div>)
                            }
                        </Container>
                    </Col>
                </React.Fragment>
            )
        } else {
            return (
                <Col className="scoreboard">
                    <Container>
                        <Row>
                            <Col>
                                <p className="reportTitle reportTitle__scoreboard">SCOREBOARD</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="scoreboard__week">
                                <p>Week {week}</p>
                            </Col>
                        </Row>

                        {matchups ?
                            (matchups.map(matchup => (
                                <ScoreboardRow
                                    key={matchup.points1}
                                    points1={matchup.points1}
                                    points2={matchup.points2}
                                    roster1={matchup.roster1}
                                    roster2={matchup.roster2}
                                />
                            ))
                            ) :
                            (<div></div>)
                        }
                    </Container>
                </Col>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        sleeperReport: state.sleeper.sleeperReport,
        sleeperWeek: state.sleeper.sleeperWeek,
        sleeperMatchups: state.sleeper.sleeperMatchups,

        espnReport: state.espn.espnReport,
        espnMatchups: state.espn.espnMatchups,
        espnWeek: state.espn.espnWeek
    }
}

export default connect(mapStateToProps, {})(Scoreboard)