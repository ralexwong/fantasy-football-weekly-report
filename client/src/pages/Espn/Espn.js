import React, { Component } from "react";
import { createEspnOverallReport } from '../../actions/Espn';
import { connect } from 'react-redux';

import EspnGuide from './EspnGuide';
// import YearInput from '../../components/YearInput';
import Espn1 from './Espn2';
import Espn2 from './Espn1';

import OptionalInputs from '../../components/OptionalInputs';

import GenerateReportButton from '../../components/GenerateReportButton';

import { Container, Row, Col } from "reactstrap"

class Espn extends Component {
    constructor(props) {
        super(props);
        if (this.props.location.pathname === "/espn") {
            this.props.createEspnOverallReport()
        }
    }

    render() {
        return (
            <div className="inputBackground inputBackground--espn">
                <Container>
                    <Row>
                        <Col className="sleeper">
                            <EspnGuide />
                            {/* <YearInput platform={'espn'} /> */}
                            <Espn1 />
                            <Espn2 />

                            <OptionalInputs platform={'espn'} />
                            <GenerateReportButton reportPage={'weekly-report-espn'} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default connect(null, { createEspnOverallReport })(Espn)