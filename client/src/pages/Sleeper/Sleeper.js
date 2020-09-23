import React from "react";

import YearInput from '../../components/YearInput';
import Sleeper1 from './Sleeper1';
import Sleeper2 from './Sleeper2';
import Sleeper3 from './Sleeper3';

import OptionalInputs from './../../components/OptionalInputs';

import GenerateReportButton from '../../components/GenerateReportButton';

import { Container, Row, Col } from "reactstrap";

export default function Sleeper() {
  return (
    <div className="inputBackground inputBackground--sleeper">
      <Container>
        <Row>
          <Col className="sleeper">
            {/* <YearInput platform={'sleeper'} /> */}
            <Sleeper1 />
            <Sleeper2 />
            <Sleeper3 />

            <OptionalInputs platform={'sleeper'} />

            <GenerateReportButton reportPage={'weekly-report-sleeper'} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}