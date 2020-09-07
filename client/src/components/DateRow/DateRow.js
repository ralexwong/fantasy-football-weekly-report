import React from 'react';
import { connect } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class DateRow extends React.Component {

    grabDate = () => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let today = new Date();
        const day = `${days[today.getDay()]}`;
        const monthDate = `${months[today.getMonth()]}`
        const dayDate = today.getDate();
        const year = today.getFullYear();

        const date = `${day}, ${monthDate} ${dayDate}, ${year}`;
        return date;
    }


    render() {
        let week;
        let season = 1; 

        if (this.props.espnReport) {
            week = this.props.espnWeek
        } else if (this.props.sleeperReport) {
            week = this.props.sleeperWeek;
        }

        if (this.props.espnReport && this.props.espnSeason) {
            season = this.props.espnSeason
        } else if (this.props.sleeperReport && this.props.sleeperSeason) {
            season = this.props.sleeperSeason
        }

        return (
            <Row className="dateRow">
                <Col>
                    <p>{this.grabDate()}</p>
                </Col>
                <Col>
                    <p style={{float: 'right'}}>Season {season} | Week {week}</p>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        sleeperReport: state.sleeper.sleeperReport,
        sleeperWeek: state.sleeper.sleeperWeek,
        sleeperSeason: state.sleeper.sleeperSeason,
        
        espnReport: state.espn.espnReport,
        espnWeek: state.espn.espnWeek,
        espnSeason: state.espn.espnSeason,
    }
}

export default connect(mapStateToProps)(DateRow);