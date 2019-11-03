import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCardsToState } from '../../../actions';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

class Cards extends Component {

    componentDidMount() {
        if (!this.props.roster) {

        } else {
          this.refactorData(this.props.roster, this.props.league_info)
        }

    }

    refactorData = (roster, league_info) => {
        let first_place = {name: '', wins: 0, fpts: 0};
        let last_place = {name: '', wins: 100, fpts: 1000};

        for (let i = 0; i < roster.length; i++) {
            if (roster[i].settings.wins > first_place.wins) {
                if (roster[i].settings.fpts > first_place.fpts) {
                    first_place = {name: roster[i].owner_id, wins: roster[i].settings.wins, fpts: roster[i].settings.fpts};
                }
            }

            if (roster[i].settings.wins < last_place.wins) {
                if (roster[i].settings.fpts < last_place.fpts) {
                    last_place = {name: roster[i].owner_id, wins: roster[i].settings.wins, fpts: roster[i].settings.fpts};
                }
            }
        }
    
        for (let i = 0; i < league_info.length; i++) {
            if (league_info[i].user_id === first_place.name) {
                first_place.name = league_info[i].display_name;
            }
            if (league_info[i].user_id === last_place.name) {
                last_place.name = league_info[i].display_name;
            }          
        }

        this.props.setCardsToState(first_place, last_place)
    }


    render() {

        return (
            <div id="mainCol">
                <Col>
                    <Row id="topCard">
                        <Col>
                            <Row>
                                <p className="cardTitle">FIRST PLACE</p>
                            </Row>

                            <div className='outerDiv'>
                                <div className='innerDiv'>
                                    <img className="cardImage" />
                                </div>
                            </div>
                            <div className='lowerDiv'>
                                <p></p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <p className="cardTitle">LAST PLACE</p>
                            </Row>

                            <div className='outerDiv'>
                                <div className='innerDiv'>
                                    <img  className="cardImage" />
                                </div>
                            </div>
                            <div className='lowerDiv'>
                                <p></p>
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
        roster: state.sleeper.roster,
        league_info: state.sleeper.league_info,
        first_place: state.sleeper.first_place,
        last_place: state.sleeper.last_place
    }
}

export default connect(mapStateToProps, { setCardsToState })(Cards);
