import React from "react";

import EspnGuide from './EspnGuide';
// import YearInput from '../../components/YearInput';
import Espn2 from './Espn2';
import Espn1 from './Espn1';

import OptionalInputs from '../../components/OptionalInputs';

import GenerateReportButton from '../../components/GenerateReportButton';

import { Container, Row, Col } from "reactstrap"

const Espn = () => {
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

export default Espn;