import React, { Component } from "react";
import { connect } from 'react-redux';
import { refactoredMatchups, closeOne, topScorer } from '../../actions';

import Title from "../../components/Title";
import DateRow from "../../components/DateRow";
import Scoreboard from "../../components/Scoreboard";
import GraphPPG from "../../components/GraphPPG";
import Standouts from '../../components/Standouts';

import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


class Report2 extends Component {

  componentDidMount() {
    console.log(this.props);

    // check if the the info from the other pages has been placed into state
    // will maybe look to having some local storage applications here so the user 
    // wont have to go through the input pages everytime
    if (!this.props.league_info || !this.props.points) {

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
          points[j].avatar = league_info[i].avatar;
        }
      }
    }

    // sorts the points array by matchup_id
    points.sort(function (a, b) { return a.matchup_id - b.matchup_id })

    console.log(points);

    // pushes the combined same matchup_id rosters together in the same object
    // and assigns each roster/points with a 1/2
    for (let i = 0; i < points.length; i += 2) {
      let object = {};
      object.roster1 = points[i].roster_id;
      object.points1 = points[i].points;
      object.avatar1 = points[i].avatar;

      object.roster2 = points[i + 1].roster_id;
      object.points2 = points[i + 1].points;
      object.matchup_id = points[i].matchup_id;
      object.avatar2 = points[i + 1].avatar;

      combinedObjects.push(object);
    }

    console.log(combinedObjects);

    // push the refactored matchups into state to be mapped out
    this.props.refactoredMatchups(combinedObjects);

    console.log(points);
    this.topScorer(points);

    // requires the matchup array and cannot be called at the same time in a different component
    this.closeOne(combinedObjects);
  }

  closeOne = (matchups) => {
    let name = "";
    let difference = 9999;
    let avatar = "";
    for (let i = 0; i < matchups.length; i++) {
      if (Math.abs(parseFloat(matchups[i].points1) - parseFloat(matchups[i].points2)) < difference) {
        difference = Math.abs(parseFloat(matchups[i].points1) - parseFloat(matchups[i].points2));
        if (parseFloat(matchups[i].points1) > parseFloat(matchups[i].points2)) {
          name = matchups[i].roster1;
          avatar = matchups[i].avatar1
        } else {
          name = matchups[i].roster2;
          avatar = matchups[i].avatar2
        }
      }
    }

    const fixedDiffernce = parseFloat(difference).toFixed(2)

    this.props.closeOne(name, fixedDiffernce, avatar);
  }

  topScorer = (points) => {
    let name = "";
    let highscore = 0.00;
    let avatar = ""
    for (let i = 0; i < points.length; i++) {
      if (parseFloat(points[i].points) > highscore) {
        highscore = parseFloat(points[i].points);
        name = points[i].roster_id;
        avatar = points[i].avatar;
      }
    }
    this.props.topScorer(name, highscore, avatar);
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
            <Scoreboard />
            <Standouts />
          </Row>
          <Row>
            <GraphPPG />
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
