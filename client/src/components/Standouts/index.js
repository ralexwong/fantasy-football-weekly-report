import React, { Component } from 'react';
import { connect } from 'react-redux';
import { } from '../../actions';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

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
            <div id="mainCol">
                <Col>
                    <Row id="topCard">
                        <Col>
                            <Row>
                                <p className="cardTitle">TOP SCORER</p>
                            </Row>

                            <div className='outerDiv'>
                                <div className='innerDiv'>
                                    <img src={topScorerUrl} alt="poop" className="cardImage" />
                                </div>
                            </div>
                            <div className='lowerDiv'>
                                <p>{this.props.topScorer.name}: {this.props.topScorer.highscore}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <p className="cardTitle">CLOSE ONE</p>
                            </Row>

                            <div className='outerDiv'>
                                <div className='innerDiv'>
                                    <img src={closeOneUrl} alt="poop" className="cardImage" />
                                </div>
                            </div>
                            <div className='lowerDiv'>
                                <p>{this.props.closeOne.name}: +{this.props.closeOne.difference}</p>
                            </div>
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

export default connect(mapStateToProps, {})(Standouts);
