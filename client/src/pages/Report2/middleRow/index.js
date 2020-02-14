import React, { Component } from 'react';
import Cards from '../Cards';
import Recap from '../Recap';

import { Row } from "reactstrap"



class MiddleRow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: 0,
            height: 0
        }
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };

    render() {
        if (this.state.width < 575) {
            return (
                <>
                    <Row className="u-space-evenly u-margin-top">
                        <Cards />
                    </Row>
                    <Row className="u-margin-top">
                        <Recap />
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
}

export default MiddleRow;
