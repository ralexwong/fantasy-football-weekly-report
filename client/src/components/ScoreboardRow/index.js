import React from 'react';
import "./style.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ScoreboardRow(props) {
    return (
        <Row className="scoreboardRow">
            <Col className="scoreboardScores col-2">
                <div>
                    <p className="points">{props.points1}</p>

                    <p className="points">{props.points2}</p>
                </div>
            </Col>

            <Col className="scoreboardNames col-9">
                <div>
                    <p className="roster">{props.roster1}</p>

                    <p className="roster">{props.roster2}</p>
                </div>
            </Col>

            <Col className="scoreboardRecord col-1">
                <div>
                    <p className="record">{(parseFloat(props.points1) > parseFloat(props.points2)) ? "W" : "L"}</p>

                    <p className="record">{(parseFloat(props.points2) > parseFloat(props.points1)) ? "W" : "L"}</p>
                </div>
            </Col>
        </Row>
    );
}


export default ScoreboardRow;