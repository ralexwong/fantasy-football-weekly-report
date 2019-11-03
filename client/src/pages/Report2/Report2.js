import React, { Component } from "react";
import { connect } from 'react-redux';
import { refactoredMatchups, closeOne, topScorer } from '../../actions';

import Title from "../../components/Title";
import DateRow from "../../components/DateRow";
import TeamNames from '../../components/Report2/TeamNames';
import GraphPoints from '../../components/Report2/GraphPoints';
import Waivers from '../../components/Report2/Waivers';
import Cards from '../../components/Report2/Cards';

import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


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
              <Col>
              
              </Col>
              <Col>
                <Cards />
                <Waivers />
              </Col>
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
