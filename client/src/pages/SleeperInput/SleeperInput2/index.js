import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchRoster, setLeague_id, fetchGraphPPG } from '../../../actions/Sleeper';

import { Jumbotron } from 'reactstrap';

class SleeperInput2 extends Component {
    state = {
        active: ''
    }
    componentDidMount() {
        console.log(this.props);
    }

    onClick = (e) => {
        console.log(e.target.getAttribute('id'));
        const league = e.target.id;

        if(this.state.active === league) { 
            this.setState({active: ''});
        } else {
            this.setState({active: league})
       }

        localStorage.setItem("league", league);
        this.props.setLeague_id(league);
        this.props.fetchGraphPPG(league);
        this.props.fetchRoster(league);
    }

    mapLeagues = (leagues) => {
        return leagues.map(league => {
            return (
                <p className={`sleeperInput__list ${this.state.active === league.league_id ? `sleeperInput__list--active` : ``}`} id={league.league_id} key={league.league_id} onClick={(e) => this.onClick(e)} >
                    {league.name}
                </p>
            )
        })
    }

    render() {
        return (
            <Jumbotron className="sleeperInput__jumbotron">
                <div className="sleeperInput__helpertext">
                    <p className="bold">
                        Click on one league!
                    </p>
                    {this.props.leagues ? (
                        this.mapLeagues(this.props.leagues)
                    ) : (
                            <p className="paragraph">No Leagues Found</p>
                        )}
                </div>

            </Jumbotron>
        )
    }
}

const mapStateToProps = (state) => {
    return { leagues: state.sleeper.leagues }
}

export default connect(mapStateToProps, { fetchRoster, setLeague_id, fetchGraphPPG })(SleeperInput2)