import React from 'react';
import "./style.css";
import { Col, Row } from "../Grid";

function ScoreboardRow(props) {
    return (
        <Row className="scoreboardRow row">
            <Col className="scoreboardScores col-2">
                <div>
                    <p>1{props.points1}</p>
                </div>
                <div>
                    <p>2{props.points2}</p>
                </div>
            </Col>

            <Col className="scoreboardNames col-9">
                <div>
                    <p>wong{props.name1}</p>
                </div>
                <div>
                    <p>man{props.name2}</p>
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