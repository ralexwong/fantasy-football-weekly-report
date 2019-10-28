import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchAvatar, refactoredMatchups } from '../../actions';

import Title from "../../components/Title";
import DateRow from "../../components/DateRow";
import Scoreboard from "../../components/Scoreboard";
import PureComponent from "../../components/GraphPPG";

import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Report extends Component {

  componentDidMount() {
    console.log(this.props);

    // check if the the info from the other pages has been placed into state
    // will maybe look to having some local storage applications here so the user 
    // wont have to go through the input pages everytime
    if (!this.props.league_info.length || !this.props.points.length) {
      
    } else {
      this.refactorState(this.props.league_info, this.props.points)
    }
  }

  // refactor the two arrays into an array with rosters with the same matchup_id to be paired in the same object
  refactorState = (league_info, points) => {
    let combinedObjects = [];

    // splices out a roster if they do not have a matchup this week
    for (let i = 0; i < league_info.length; i++) {
      if (league_info[i].roster_id === null) {
        league_info.splice(i, 1);
      }
    }

    // replaces the roster_id with display_name
    for (let i = 0; i < league_info.length; i++) {
      for (let j = 0; j < league_info.length; j++) {
        if (league_info[i].roster_id === points[j].roster_id) {
          points[j].roster_id = league_info[i].display_name;
        }
      }
    }

    // sorts the points array by matchup_id
    points.sort(function(a, b){return a.matchup_id - b.matchup_id})

    console.log(points);

    // pushes the combined same matchup_id rosters together in the same object
    // and assigns each roster/points with a 1/2
    for (let i = 0; i < points.length; i += 2) {
      let object = {};
      object.roster1 = points[i].roster_id;
      object.points1 = points[i].points;
      object.roster2 = points[i + 1].roster_id;
      object.points2 = points[i + 1].points;
      object.matchup_id = points[i].matchup_id;
      combinedObjects.push(object);
    }

    console.log(combinedObjects);

    // push the refactored matchups into state to be mapped out
    this.props.refactoredMatchups(combinedObjects);
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
            <Col className="col-6">
              <Scoreboard />
            </Col>
            <Col className="col-6">
              <Row>
                <Col className="col-6">

                </Col>
              </Row>
              <Row>
                <Col className="col-6">

                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <PureComponent />
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
  
export default connect(mapStateToProps, { fetchAvatar, refactoredMatchups })(Report);

  