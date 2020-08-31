import React, { Component } from "react";
import { connect } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Title extends Component {
    render() {
        let title
        let caption
    
        if (this.props.sleeperReport && this.props.sleeperTitle) {
            title = this.props.sleeperTitle
        } else if (this.props.espnReport && this.props.espnTitle) {
            title = this.props.espnTitle
        } else {
            title = "DIRTY TRIBUNE"
        }
    
        if (this.props.sleeperReport && this.props.sleeperCaption) {
            caption = this.props.sleeperCaption
        } else if (this.props.espnReport && this.props.espnCaption) {
            caption = this.props.espnCaption
        } else {
            caption = "Fantasy football is about proving that you are better than your friends"
        }
    
        return (
            <Row>
                <Col>
                    <p className="reportTitle reportTitle__header">{title}</p>
                    <p className="reportCaption">{caption}</p>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        sleeperReport: state.sleeper.sleeperReport,
        sleeperTitle: state.sleeper.sleeperTitle,
        sleeperCaption: state.sleeper.sleeperCaption,

        espnReport: state.espn.espnReport,
        espnTitle: state.espn.espnTitle,
        espnCaption: state.espn.espnCaption
    }
}

export default connect(mapStateToProps, {})(Title);