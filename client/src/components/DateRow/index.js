import React from 'react';
import "./style.css";
import { Col, Row } from "../Grid";

function DateRow(props) {
    return (
        <Row id="dateRowDiv">
            <img src="" alt=""></img>
            <Col className="col-10">
                <input></input>
            </Col>
            <Col >
                <p>Season 1 | Week {props.weekNum}</p>
            </Col>
        </Row>
    );
}

export default DateRow;