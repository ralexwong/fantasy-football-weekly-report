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
        let topScorerUrl = "";
        if (this.props.topScorer) {
            topScorerUrl = `http://sleepercdn.com/avatars/${this.props.topScorer.avatar}`
        };

        let closeOneUrl = "";
        if (this.props.closeOne) {
            closeOneUrl = `http://sleepercdn.com/avatars/${this.props.closeOne.avatar}`
        }

        return (
            <div style={{ padding: '0 0 0 20px  '}}>
                {this.props.topScorer ? 
                (
                <Col>
                    <Row>
                        <Col>
                            <Row>
                                <p id="scoreboard">TOP SCORER</p>
                            </Row>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={topScorerUrl} />
                                <Card.Body>
                                    <Card.Title>{this.props.topScorer.name}</Card.Title>
                                    <Card.Text>
                                        {this.props.topScorer.highscore}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <p id="scoreboard">CLOSE ONE</p>
                            </Row>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={closeOneUrl} />
                                <Card.Body>
                                    <Card.Title>{this.props.closeOne.name}</Card.Title>
                                    <Card.Text>
                                        {`+ ${this.props.closeOne.difference}`}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                ) 
                :
                (
                <div></div>
                )}
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
