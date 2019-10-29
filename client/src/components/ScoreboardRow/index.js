import React from 'react';
import "./style.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ScoreboardRow(props) {
    return (
        <Row className="scoreboardRow row">
            <Col className="scoreboardScores col-2">
                <div>
                    <p>{props.points1}</p>
                </div>
                <div>
                    <p>{props.points2}</p>
                </div>
            </Col>

            <Col className="scoreboardNames col-9">
                <div>
                    <p>{props.roster1}</p>
                </div>
                <div>
                    <p>{props.roster2}</p>
                </div>
            </Col>

            <Col className="scoreboardRecord col-1">
                <div>
                    <p>{(props.points1 > props.points2) ? "W" : "L"}</p>
                </div>
                <div>
                    <p>{(props.points2 > props.points1) ? "W" : "L"}</p>
                </div>
            </Col>
        </Row>
    );
}


export default ScoreboardRow;