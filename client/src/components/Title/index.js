import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Title() {
    return (
        <Row>
            <Col classsName="reportHeader">
                <p className="reportHeader__title">DIRTY TRIBUNE</p>
                <p className="reportHeader__caption">Fantasy football is about proving that you are better than your friends. </p>
            </Col>
        </Row>
    )
}

export default Title;