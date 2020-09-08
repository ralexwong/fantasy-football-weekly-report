import React, { Component } from 'react';
import { connect } from 'react-redux';
import { } from '../../../actions/Sleeper';
import { Col } from "reactstrap"


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
        let topScorer = {
            name: "",
            score: 0,
            logo: ""
        }
        let closeOne = {
            name: "",
            difference: 0,
            logo: ""
        }

        if (this.props.espnReport && this.props.espnTopScorer) {
            topScorer = this.props.espnTopScorer;
            closeOne = this.props.espnCloseOne;
        } else if (this.props.sleeperReport && this.props.sleeperTopScorer) {
            topScorer = this.props.sleeperTopScorer;
            closeOne = this.props.sleeperCloseOne;
        }

        console.log(this.props)

        if (this.state.width < 575) {
            return (
                <React.Fragment>
                    <Col xs={6} className="cards">
                        <p className="reportTitle">TOP SCORER</p>

                        <div className='cards__outerBox'>
                            <div className='cards__innerBox'>
                                <img 
                                    crossOrigin="anonymous"
                                    referrerPolicy="origin" 
                                    src={`https://whispering-woodland-11588.herokuapp.com/${topScorer.logo}`} 
                                    alt="poop" 
                                    className="cards__image" />
                            </div>
                        </div>
                        <div className='cards__lowerBox'>
                            <p className="cards__name">
                                {topScorer.name}: 
                                <br />
                                {topScorer.score}
                            </p>
                        </div>
                    </Col>
                    <Col xs={6} className="cards">
                        <p className="reportTitle">CLOSE ONE</p>

                        <div className='cards__outerBox'>
                            <div className='cards__innerBox'>
                                <img 
                                    crossOrigin="anonymous"
                                    referrerPolicy="origin" 
                                    src={`https://whispering-woodland-11588.herokuapp.com/${closeOne.logo}`} 
                                    alt="poop" 
                                    className="cards__image" />
                            </div>
                        </div>
                        <div className='cards__lowerBox'>
                            <p className="cards__name">
                                {closeOne.name}:
                                <br></br>
                                +{closeOne.difference}
                            </p>
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
                            <img 
                                crossOrigin="anonymous"
                                referrerPolicy="origin" 
                                src={`https://whispering-woodland-11588.herokuapp.com/${topScorer.logo}`} 
                                alt="poop" 
                                className="cards__image" />
                        </div>
                    </div>
                    <div className='cards__lowerBox'>
                        <p>
                            {topScorer.name}: 
                            <br />
                            {topScorer.score}
                        </p>
                    </div>

                    <div className="hr"></div>

                    <p className="reportTitle">CLOSE ONE</p>

                    <div className='cards__outerBox'>
                        <div className='cards__innerBox'>
                            <img 
                                crossOrigin="anonymous"
                                referrerPolicy="origin" 
                                src={`https://whispering-woodland-11588.herokuapp.com/${closeOne.logo}`} 
                                alt="poop" 
                                className="cards__image" />
                        </div>
                    </div>
                    <div className='cards__lowerBox'>
                        <p>
                            {closeOne.name}:
                            <br></br>
                            +{closeOne.difference}
                        </p>
                    </div>
                </Col>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        sleeperReport: state.sleeper.sleeperReport,
        sleeperTopScorer: state.sleeper.sleeperTopScorer,
        sleeperCloseOne: state.sleeper.sleeperCloseOne,

        espnReport: state.espn.espnReport,
        espnTopScorer: state.espn.espnTopScorer,
        espnCloseOne: state.espn.espnCloseOne
    }
}

export default connect(mapStateToProps, {})(Standouts);
