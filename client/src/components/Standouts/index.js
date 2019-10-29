import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  } from '../../actions';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class Standouts extends Component {

    componentDidMount() {

    }


    render() {
        return (
            <div>
                <Col className="col-6">
                    <Row>
                        <Col className="col-6">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="" />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-6">

                        </Col>
                    </Row>
                </Col>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        points: state.sleeper.points,
        matchups: state.sleeper.matchups,
        topScorer: state.sleeper.topScorer,
        closeOne: state.sleeper.closeOne
    }
}

export default connect(mapStateToProps, { })(Standouts);
