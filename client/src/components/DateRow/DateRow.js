import React from 'react';
import { useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DateRow = () => {

    const state = useSelector((state) => state)

    const grabDate = () => {
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

    let week;
    let season = 1; 

    if (state.espn.espnReport) {
        week = state.espn.espnWeek
    } else if (state.sleeper.sleeperReport) {
        week = state.sleeper.sleeperWeek;
    }

    if (state.espn.espnReport && state.espn.espnSeason) {
        season = state.espn.espnSeason
    } else if (state.sleeper.sleeperReport && state.sleeper.sleeperSeason) {
        season = state.sleeper.sleeperSeason
    }

    return (
        <Row className="dateRow">
            <Col>
                <p>{grabDate()}</p>
            </Col>
            <Col>
                <p style={{float: 'right'}}>Season {season} | Week {week}</p>
            </Col>
        </Row>
    );
}

export default DateRow;