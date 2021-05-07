import React, { useState, useEffect } from 'react';
import Cards from '../Cards';
import Recap from '../Recap';

import { Row } from "reactstrap"

const MiddleRow = () => {

    const [width, setWidth] = useState(0)

    useEffect(() => {
        updateWindowDimensions()
        window.addEventListener("resize", updateWindowDimensions)

        return () => {
            window.removeEventListener("resize", updateWindowDimensions);
        }
    }, [])

    const updateWindowDimensions = () => {
        setWidth(window.innerWidth);
    };

    if (width < 575) {
        return (
            <>
                <Row className="u-space-evenly u-margin-top">
                    <Cards />
                </Row>
                <Row className="u-margin-top">
                    <Recap border={"none"} />
                </Row>
            </>
        )
    } else {
        return (
            <Row className="u-margin-top">
                <Recap />
                <Cards />
            </Row>
        )
    }
}

export default MiddleRow;
