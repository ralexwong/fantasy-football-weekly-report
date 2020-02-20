import React, { Component } from "react";

import SleeperInput1 from './SleeperInput1';
import SleeperInput2 from './SleeperInput2';
import SleeperInput3 from './SleeperInput3';

import { Container, Row, Col } from "reactstrap"

class SleeperInput extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className="sleeperBackground">
                <Container>
                    <Row>
                        <Col className="sleeperInput">
                            <SleeperInput1 />
                            <SleeperInput2 />
                            <SleeperInput3 />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default SleeperInput;