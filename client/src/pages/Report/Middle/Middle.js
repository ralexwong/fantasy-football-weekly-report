import React, { useState, useEffect } from 'react';
import Standouts from '../Standouts';
import Scoreboard from '../Scoreboard';

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
                    <Standouts />
                </Row>
                <Row className="u-margin-top">
                    <Scoreboard />
                </Row>
            </>
        )
    } else {
        return (
            <Row className="u-margin-top">
                <Scoreboard />
                <Standouts />
            </Row>
        )
    }
}

export default MiddleRow;
