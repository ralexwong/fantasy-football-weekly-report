import React, { Component } from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
import { Col, Row, Container } from "../components/Grid";
import Title from "../components/Title";
import DateRow from "../components/DateRow";
import Scoreboard from "../components/Scoreboard";
import ScoreboardRow from "../components/ScoreboardRow";
import PlayerCard from "../components/PlayerCard";
import PureComponent from "../components/GraphPPG";


class Main extends Component {
    state = {
      weekNum: 1,
      matchups: [1,2,3,4,5],
      leagueid: [],
      username: "",

    };
    
  
    componentDidMount() {
    }
  
    handleFormSubmit = event => {
      event.preventDefault();

    };
  
    render() {
      return (
        <div>
          <Nav />
          <Container>
            <Title />
            <DateRow weekNum={this.state.weekNum}/>
            <Row>
              <Col className="col-6">
                <Scoreboard weekNum={this.state.weekNum}/>
                {this.state.matchups.map(matchup => (
                  <ScoreboardRow key={matchup}/>
                ))}
              </Col>
              <Col className="col-6">
                {/* 1/2 scoring player */}
                <Row>
                  <Col className="col-6">
                    <PlayerCard />
                  </Col>
                  <Col className="col-6">
                    <PlayerCard />
                  </Col>
                </Row>
                {/* 3/4 scoring player */}
                <Row>
                  <Col className="col-6">
                    <PlayerCard />
                  </Col>
                  <Col className="col-6">
                    <PlayerCard />
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
  
  export default Main;

  