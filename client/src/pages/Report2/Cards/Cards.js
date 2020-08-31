import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCardsToState } from '../../../actions/Sleeper';
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
        if (!this.props.roster) {

        } else {
            this.refactorData(this.props.roster, this.props.league_info)
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };

    refactorData = (roster, league_info) => {
        let first_place = { name: '', wins: 0, fpts: 0 };
        let last_place = { name: '', wins: 100, fpts: 9999 };
        console.log(roster);

        for (let i = 0; i < roster.length; i++) {
            if (roster[i].settings.wins > first_place.wins) {
                first_place = {
                    name: roster[i].owner_id,
                    wins: roster[i].settings.wins,
                    fpts: roster[i].settings.fpts
                };
            }

            if (roster[i].settings.wins === first_place.wins) {
                if (roster[i].settings.fpts > first_place.fpts) {
                    first_place = {
                        name: roster[i].owner_id,
                        wins: roster[i].settings.wins,
                        fpts: roster[i].settings.fpts
                    };
                }
            }

            if (roster[i].settings.wins <= last_place.wins) {
                if (roster[i].settings.wins < last_place.wins) {
                    last_place = {
                        name: roster[i].owner_id,
                        wins: roster[i].settings.wins,
                        fpts: roster[i].settings.fpts
                    };
                }
                if (roster[i].settings.wins === last_place.wins) {
                    if (roster[i].settings.fpts < last_place.fpts) {
                        last_place = {
                            name: roster[i].owner_id,
                            wins: roster[i].settings.wins,
                            fpts: roster[i].settings.fpts
                        };
                    }
                }
            }
        }

        for (let i = 0; i < league_info.length; i++) {
            if (league_info[i].user_id === first_place.name) {
                first_place.name = league_info[i].display_name;
                first_place.avatar = league_info[i].avatar;
            }
            if (league_info[i].user_id === last_place.name) {
                last_place.name = league_info[i].display_name;
                last_place.avatar = league_info[i].avatar;
            }
        }

        this.props.setCardsToState(first_place, last_place)
    }


    render() {
        console.log(this.props)
        let first_place = ""
        let first_place_name = "";
        if (this.props.espn_first_place && this.props.espnReport) {
            first_place = `https://whispering-woodland-11588.herokuapp.com/${this.props.espn_first_place.logo}`;
            first_place_name = this.props.espn_first_place.name
        } else if (this.props.first_place && this.props.sleeperReport) {
            first_place = `https://whispering-woodland-11588.herokuapp.com/http://sleepercdn.com/avatars/${this.props.first_place.avatar}`;
            first_place_name = this.props.last_place.name
        }

        let last_place = ""
        let last_place_name = "";
        if (this.props.espn_last_place && this.props.espnReport) {
            last_place = `https://whispering-woodland-11588.herokuapp.com/${this.props.espn_last_place.logo}`
            last_place_name = this.props.espn_last_place.name;
        } else if (this.props.last_place && this.props.sleeperReport) {
            last_place = `https://whispering-woodland-11588.herokuapp.com/http://sleepercdn.com/avatars/${this.props.last_place.avatar}`;
            last_place_name = this.props.last_place.name;
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
        roster: state.sleeper.roster,
        league_info: state.sleeper.league_info,
        first_place: state.sleeper.first_place,
        last_place: state.sleeper.last_place,

        espnReport: state.espn.espnReport,
        espn_first_place: state.espn.first_place,
        espn_last_place: state.espn.last_place
    }
}

export default connect(mapStateToProps, { setCardsToState })(Cards);