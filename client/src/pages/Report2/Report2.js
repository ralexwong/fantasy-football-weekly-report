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
import Col from 'react-bootstrap/Col';


class Report2 extends Component {

  componentDidMount() {

  }

  render() {

    const divStyle = {
      border: '2px solid black'
    };

    const rowStyle = {
      padding: '0 50px 0 30px'
    }

    return (
      <div>
        <Container style={divStyle} id="mainContainer">
          <Title />
          <DateRow />
          <Row style={rowStyle}>
            <Col className = "recapCol">
              <Recap />
            </Col>
            <Cards />
            {/* <Waivers /> */}
          </Row>
          <Row>
            <GraphPoints />
          </Row>
        </Container>
      </div>

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
