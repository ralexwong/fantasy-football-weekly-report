import React, { Component } from "react";

import EspnInput1 from './EspnInput1';

import { Container, Row, Col } from "reactstrap"

class EspnInput extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className="espnBackground">
                <Container>
                    <Row>
                        <Col className="espnInput">
                            <EspnInput1 />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default EspnInput;