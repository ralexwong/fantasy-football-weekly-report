import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from "reactstrap"

class Cards extends Component {
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
    }

    render() {
        let first_place = ""
        let first_place_name = "";
        if (this.props.espn_first_place && this.props.espnReport) {
            first_place = `https://whispering-woodland-11588.herokuapp.com/${this.props.espn_first_place.logo}`;
            first_place_name = this.props.espn_first_place.name
        } else if (this.props.sleeper_first_place && this.props.sleeperReport) {
            first_place = `https://whispering-woodland-11588.herokuapp.com/http://sleepercdn.com/avatars/${this.props.sleeper_first_place.logo}`;
            first_place_name = this.props.sleeper_first_place.name
        }

        let last_place = ""
        let last_place_name = "";
        if (this.props.espn_last_place && this.props.espnReport) {
            last_place = `https://whispering-woodland-11588.herokuapp.com/${this.props.espn_last_place.logo}`
            last_place_name = this.props.espn_last_place.name;
        } else if (this.props.sleeper_last_place && this.props.sleeperReport) {
            last_place = `https://whispering-woodland-11588.herokuapp.com/http://sleepercdn.com/avatars/${this.props.sleeper_last_place.logo}`;
            last_place_name = this.props.sleeper_last_place.name;
        }
            
        if (this.state.width < 575) {
            return (
                <>
                    <Col xs={6} className="cards">
                        <p className="reportTitle">FIRST PLACE</p>

                        <div className='cards__outerBox'>
                            <div className='cards__innerBox'>
                                <img 
                                    crossOrigin="anonymous"
                                    referrerPolicy="origin" 
                                    onError={(event)=>event.target.setAttribute("src","./images/nfl-logo.jpg")}
                                    src={first_place} 
                                    alt="poop" 
                                    className="cards__image" />
                            </div>
                        </div>
                        <div className='cards__lowerBox'>
                            <p className="cards__name">{first_place_name}</p>
                        </div>
                    </Col>

                    <Col xs={6} className="cards">
                        <p className="reportTitle">LAST PLACE</p>

                        <div className='cards__outerBox'>
                            <div className='cards__innerBox'>
                                <img 
                                    crossOrigin="anonymous"
                                    referrerPolicy="origin" 
                                    onError={(event)=>event.target.setAttribute("src","./images/nfl-logo.jpg")}
                                    src={last_place} 
                                    alt="poop" 
                                    className="cards__image" />
                            </div>
                        </div>
                        <div className='cards__lowerBox'>
                            <p className="cards__name">{last_place_name}</p>
                        </div>
                    </Col>
                </>
            )
        } else {
            return (
                <Col className="cards">
                    <p className="reportTitle">FIRST PLACE</p>

                    <div className='cards__outerBox'>
                        <div className='cards__innerBox'>
                            <img 
                                crossOrigin="anonymous"
                                referrerPolicy="origin" 
                                onError={(event)=>event.target.setAttribute("src","./images/nfl-logo.jpg")}
                                src={first_place} 
                                alt="poop" 
                                className="cards__image" />
                        </div>
                    </div>
                    <div className='cards__lowerBox'>
                        <p>{first_place_name}</p>
                    </div>

                    <div className="hr"></div>

                    <p className="reportTitle">LAST PLACE</p>

                    <div className='cards__outerBox'>
                        <div className='cards__innerBox'>
                            <img 
                                crossOrigin="anonymous"
                                referrerPolicy="origin" 
                                onError={(event)=>event.target.setAttribute("src","./images/nfl-logo.jpg")}
                                src={last_place} 
                                alt="poop" 
                                className="cards__image" />
                        </div>
                    </div>
                    <div className='cards__lowerBox'>
                        <p>{last_place_name}</p>
                    </div>
                </Col>
            )
        }
    }
}
const mapStateToProps = (state) => {
    return {
        sleeperReport: state.sleeper.sleeperReport,
        sleeper_first_place: state.sleeper.sleeper_first_place,
        sleeper_last_place: state.sleeper.sleeper_last_place,

        espnReport: state.espn.espnReport,
        espn_first_place: state.espn.espn_first_place,
        espn_last_place: state.espn.espn_last_place
    }
}

export default connect(mapStateToProps)(Cards);