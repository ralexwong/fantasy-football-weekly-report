import React, { Component } from "react";
import { connect } from 'react-redux';
import { refactoredMatchups, closeOne, topScorer, refactorData, setGraphPPG } from '../../actions/Sleeper';

import Title from "../../components/Title";
import DateRow from "../../components/DateRow";
import MiddleRow from './Middle';
import GraphPPG from "./GraphPPG";

import { Container } from "reactstrap"


class Report extends Component {

  componentDidMount() {
    console.log(this.props)

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

    // push the refactored matchups into state to be mapped out
    this.props.refactoredMatchups(combinedObjects);

    let arr = [];

    console.log(combinedObjects);
    for (let i = 0; i < combinedObjects.length; i++) {
      if (parseFloat(combinedObjects[i].points1) > parseFloat(combinedObjects[i].points2)) {
        arr.push({ label: combinedObjects[i].roster1, y: parseFloat(combinedObjects[i].points1), color: "#00006b" });
        arr.push({ label: combinedObjects[i].roster2, y: parseFloat(combinedObjects[i].points2), color: "#b61e1e" });
      } else {
        arr.push({ label: combinedObjects[i].roster1, y: parseFloat(combinedObjects[i].points1), color: "#b61e1e" });
        arr.push({ label: combinedObjects[i].roster2, y: parseFloat(combinedObjects[i].points2), color: "#00006b" });
      }
    }

    arr.sort(function (a, b) { return b.y - a.y})

    console.log("in refactorState report CDM " + arr);

    this.props.setGraphPPG(arr);

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
    return (
      <Container className="reportContainer">
        <Title />
        <DateRow />
        <MiddleRow />
        <GraphPPG />
      </Container>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    league_info: state.sleeper.league_info,
    points: state.sleeper.points,
    league_id: state.sleeper.league_id,
    matchups: state.sleeper.matchups,
    graphPoints: state.sleeper.graphPoints
  }
}

export default connect(mapStateToProps, { refactoredMatchups, closeOne, topScorer, refactorData, setGraphPPG })(Report);