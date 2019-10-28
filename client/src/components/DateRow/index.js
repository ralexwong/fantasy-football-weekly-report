import React from 'react';
import { connect } from 'react-redux';

import "./style.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class DateRow extends React.Component {

    grabDate = () => {
        let today = new Date();
        const date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear()
        return date;
    }


    render() {
        return (
            <Row id="dateRowDiv">
                <img src="" alt=""></img>
                <Col className="col-10">
                    {this.grabDate()}
                </Col>
                <Col >
                    <p>Season 1 | Week {this.props.week}</p>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = (state) => {
    return { week: state.sleeper.week }
}

export default connect(mapStateToProps)(DateRow);