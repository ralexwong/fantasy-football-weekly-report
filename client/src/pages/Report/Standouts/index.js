import React, { Component } from 'react';
import { connect } from 'react-redux';
import { } from '../../../actions';
import Col from 'react-bootstrap/Col';
import './style.css';

class Standouts extends Component {
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
        let topScorerUrl = "";
        console.log(this.props.topScorer)
        if (this.props.topScorer) {
            topScorerUrl = `https://sleepercdn.com/avatars/${this.props.topScorer.avatar}`
        };

        let closeOneUrl = "";
        if (this.props.closeOne) {
            closeOneUrl = `https://sleepercdn.com/avatars/${this.props.closeOne.avatar}`
        }


        if (this.state.width < 575) {
            return (
                <React.Fragment>
                    <Col xs={6} className="cards">
                        <p className="reportTitle">TOP SCORER</p>

                        <div className='cards__outerBox'>
                            <div className='cards__innerBox'>
                                <img src={topScorerUrl} alt="poop" className="cards__image" />
                            </div>
                        </div>
                        <div className='cards__lowerBox'>
                            <p className="cards__name">{this.props.topScorer.name}: {this.props.topScorer.highscore}</p>
                        </div>
                    </Col>
                    <Col xs={6} className="cards">
                        <p className="reportTitle">CLOSE ONE</p>

                        <div className='cards__outerBox'>
                            <div className='cards__innerBox'>
                                <img src={closeOneUrl} alt="poop" className="cards__image" />
                            </div>
                        </div>
                        <div className='cards__lowerBox'>
                            <p className="cards__name">{this.props.closeOne.name}: +{this.props.closeOne.difference}</p>
                        </div>
                    </Col>
                </React.Fragment>
            )
        } else {
            return (
                <Col className="cards">
                    <p className="reportTitle">TOP SCORER</p>

                    <div className='cards__outerBox'>
                        <div className='cards__innerBox'>
                            <img src={topScorerUrl} alt="poop" className="cards__image" />
                        </div>
                    </div>
                    <div className='cards__lowerBox'>
                        <p>{this.props.topScorer.name}: {this.props.topScorer.highscore}</p>
                    </div>

                    <div className="hr"></div>

                    <p className="reportTitle">CLOSE ONE</p>

                    <div className='cards__outerBox'>
                        <div className='cards__innerBox'>
                            <img src={closeOneUrl} alt="poop" className="cards__image" />
                        </div>
                    </div>
                    <div className='cards__lowerBox'>
                        <p>{this.props.closeOne.name}: +{this.props.closeOne.difference}</p>
                    </div>
                </Col>
            )
        }
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
