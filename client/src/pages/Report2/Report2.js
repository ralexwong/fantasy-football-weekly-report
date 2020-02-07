import React, { Component } from "react";
import { connect } from 'react-redux';
import { refactoredMatchups, closeOne, topScorer } from '../../actions';
import './report2.css'

import Title from "../../components/Title";
import DateRow from "../../components/DateRow";
import GraphPoints from './GraphPoints';
import Cards from './Cards';
import Recap from './Recap';

import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';


class Report2 extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <Container className="reportContainer">
        <Title />
        <DateRow />
        <Row className="u-margin-top">
          <Recap />
          <Cards />
        </Row>
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
