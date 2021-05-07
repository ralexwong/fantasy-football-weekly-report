import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from "reactstrap"
import ScoreboardRow from '../ScoreboardRow';

const Scoreboard = () => {

    const [width, setWidth] = useState(0)

    const state = useSelector((state) => state)

    useEffect(() => {
        updateWindowDimensions()
        window.addEventListener("resize", updateWindowDimensions)

        return () => {
            window.removeEventListener("resize", updateWindowDimensions);
        }
    }, [])

    const updateWindowDimensions = () => {
        setWidth(window.innerWidth);
    };

    let matchups = [];
    if (state.espn.espnReport) {
        matchups = state.espn.espnMatchups
    } else if (state.sleeper.sleeperReport) {
        matchups = state.sleeper.sleeperMatchups
    }

    let week = "";
    if (state.espn.espnReport) {
        week = state.espn.espnWeek
    } else if (state.sleeper.sleeperReport) {
        week = state.sleeper.sleeperWeek;
    }

    if (width < 575) {
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
                            (matchups.map((matchup, i) => (
                                <ScoreboardRow
                                    key={i}
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
                        (matchups.map((matchup, i) => (
                            <ScoreboardRow
                                key={i}
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

export default Scoreboard;