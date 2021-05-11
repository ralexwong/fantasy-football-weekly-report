import React from 'react';
import Standouts from '../Standouts';
import Scoreboard from '../Scoreboard';

import { Row } from "reactstrap"


const MiddleRow = () => {
    return (
        <Row className="u-margin-top middleRow">
            <Scoreboard />
            <Standouts />
        </Row>
    )
}

export default MiddleRow;
