import React, { Component } from 'react';
import { connect } from 'react-redux';
import { } from '../../../actions';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
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
            <Col xs={4} className="standouts">
                <p className="standouts__title">TOP SCORER</p>

                <div className='standouts__outerBox'>
                    <div className='standouts__innerBox'>
                        <img src={topScorerUrl} alt="poop" className="standouts__image" />
                    </div>
                </div>
                <div className='standouts__numberBox'>
                    <p>{this.props.topScorer.name}: {this.props.topScorer.highscore}</p>
                </div>

                <hr></hr>

                <p className="standouts__title">CLOSE ONE</p>

                <div className='standouts__outerBox'>
                    <div className='standouts__innerBox'>
                        <img src={closeOneUrl} alt="poop" className="standouts__image" />
                    </div>
                </div>
                <div className='standouts__numberBox'>
                    <p>{this.props.closeOne.name}: +{this.props.closeOne.difference}</p>
                </div>
            </Col>
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
