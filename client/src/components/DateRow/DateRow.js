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

        let week = "";
        if (this.props.espnReport) {
            week = this.props.espnWeek
        } else if (this.props.sleeperReport) {
            week = this.props.sleeperWeek;
        }
        return (
            <Row className="dateRow">
                <Col>
                    <p>{this.grabDate()}</p>
                </Col>
                <Col>
                    <p style={{float: 'right'}}>Season 1 | Week {week}</p>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        sleeperReport: state.sleeper.sleeperReport,
        sleeperWeek: state.sleeper.sleeperWeek,
        
        espnReport: state.espn.espnReport,
        espnWeek: state.espn.espnWeek
    }
}

export default connect(mapStateToProps)(DateRow);