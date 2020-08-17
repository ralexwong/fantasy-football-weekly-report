import React, { Component } from "react";

import Sleeper1 from './Sleeper1';
import Sleeper2 from './Sleeper2';
import Sleeper3 from './Sleeper3';
import GenerateReportButton from '../../components/GenerateReportButton';

import { Container, Row, Col } from "reactstrap"

class Sleeper extends Component {
    render() {
        return (
            <div className="sleeperBackground">
                <Container>
                    <Row>
                        <Col className="sleeper">
                            <Sleeper1 />
                            <Sleeper2 />
                            <Sleeper3 />
                            <GenerateReportButton reportPage={'weekly-report-sleeper'} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Sleeper;