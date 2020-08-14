import React from 'react';

import { Row, Col } from "reactstrap"


function ScoreboardRow(props) {
    return (
        <Row className="scoreboard__row">
            <Col className="scoreboard__scores col-2">
                <p>{props.points1}</p>

                <p>{props.points2}</p>
            </Col>

            <Col className="scoreboard__names col-9">
                <p>{props.roster1}</p>

                <p>{props.roster2}</p>
            </Col>

            <Col className="scoreboard__record col-1">
                <p>{(parseFloat(props.points1) > parseFloat(props.points2)) ? "W" : "L"}</p>

                <p>{(parseFloat(props.points2) > parseFloat(props.points1)) ? "W" : "L"}</p>
            </Col>
        </Row>
    );
}


export default ScoreboardRow;