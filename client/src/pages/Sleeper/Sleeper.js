import React, { Component } from "react";

import YearInput from '../../components/YearInput';
import Sleeper1 from './Sleeper1';
import Sleeper2 from './Sleeper2';
import Sleeper3 from './Sleeper3';

import SeasonInput from '../../components/SeasonInput';
import TitleInput from '../../components/TitleInput';
import CaptionInput from '../../components/CaptionInput';

import GenerateReportButton from '../../components/GenerateReportButton';

import { Container, Row, Col } from "reactstrap"

class Sleeper extends Component {
    render() {
        return (
            <div className="sleeperBackground">
                <Container>
                    <Row>
                        <Col className="sleeper">
                            <YearInput platform={'sleeper'} />
                            <Sleeper1 />
                            <Sleeper2 />
                            <Sleeper3 />

                            <SeasonInput platform={'sleeper'} />
                            <TitleInput platform={'sleeper'} />
                            <CaptionInput platform={'sleeper'} />
                            <GenerateReportButton reportPage={'weekly-report-sleeper'} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Sleeper;