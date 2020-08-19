import React, { Component } from "react";
import { createEspnOverallReport } from '../../actions/Espn';
import { connect } from 'react-redux';

import Espn1 from './Espn2';
import Espn2 from './Espn1';
import GenerateReportButton from '../../components/GenerateReportButton';

import { Container, Row, Col } from "reactstrap"

class Espn extends Component {
    constructor(props) {
        super(props);
        if (this.props.location.pathname === "/espn") {
            this.props.createEspnOverallReport()
        } else if (this.props.location.pathname === "/sleeper") {
            this.props.createSleeperOverallReport()
        }

        console.log(this.props)
    }
    render() {
        return (
            <div className="espnBackground">
                <Container>
                    <Row>
                        <Col className="sleeper">
                            <Espn1 />
                            <Espn2 />
                            <GenerateReportButton reportPage={'weekly-report-espn'} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default connect(null, { createEspnOverallReport })(Espn)