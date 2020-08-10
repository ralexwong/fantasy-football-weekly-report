import React, { Component } from "react";

import Espn1 from './Espn2';
import Espn2 from './Espn1'

import { Container, Row, Col } from "reactstrap"

class Espn extends Component {
    render() {
        return (
            <div className="espnBackground">
                <Container>
                    <Row>
                        <Col className="sleeper">
                            <Espn1 />
                            <Espn2 />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Espn;