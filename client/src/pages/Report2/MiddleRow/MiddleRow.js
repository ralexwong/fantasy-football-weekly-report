import React from 'react';
import Cards from '../Cards';
import Recap from '../Recap';

import { Row } from "reactstrap"

const MiddleRow = () => {
    return (
        <Row className="u-margin-top middleRow">
            <Recap />
            <Cards />
        </Row>
    )
}

export default MiddleRow;
