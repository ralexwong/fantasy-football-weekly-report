import React from 'react';
import "./style.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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