import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Title() {
    return (
        <Row>
            <Col>
                <p className="reportTitle reportTitle__header">DIRTY TRIBUNE</p>
                <p className="reportCaption">Fantasy football is about proving that you are better than your friends. </p>
            </Col>
        </Row>
    )
}

export default Title;