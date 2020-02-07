import React, { Component } from "react";
import { connect } from 'react-redux';
import { refactoredMatchups, closeOne, topScorer } from '../../actions';

import Title from "../../components/Title";
import DateRow from "../../components/DateRow";
import MiddleRow from './middleRow';
import GraphPoints from './GraphPoints';

import Container from "react-bootstrap/Container";

class Report2 extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <Container className="reportContainer">
        <Title />
        <DateRow />
        <MiddleRow />
        <GraphPoints />
      </Container>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    league_info: state.sleeper.league_info,
    points: state.sleeper.points,
    league_id: state.sleeper.league_id,
    matchups: state.sleeper.matchups
  }
}

export default connect(mapStateToProps, { refactoredMatchups, closeOne, topScorer })(Report2);
