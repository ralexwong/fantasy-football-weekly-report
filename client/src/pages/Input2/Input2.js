import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchRoster, setLeague_id, fetchGraphPPG } from '../../actions';

import Container from "react-bootstrap/Container";

class Input2 extends Component {
    componentDidMount() {
        console.log(this.props);
    }

    onClick = (e) => {
        console.log(e.target.getAttribute('id'));
        const league = e.target.getAttribute('id');
        localStorage.setItem("league", league);
        this.props.setLeague_id(league);
        this.props.fetchGraphPPG(league);
        this.props.fetchRoster(league);
    }

    mapLeagues = (leagues) => {
        return leagues.map(league => {
            return (
                <div id={league.league_id} key={league.league_id} onClick={(e) => this.onClick(e)} >
                    {league.name}
                </div>
            )
        })
    }

  render() {
    return (
      <Container>
          {this.props.leagues ? (
            this.mapLeagues(this.props.leagues)
          ) : (
              <div>Leagues not found</div>
          )}
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
    return { leagues: state.sleeper.leagues }
}

export default connect(mapStateToProps, { fetchRoster, setLeague_id, fetchGraphPPG })(Input2)