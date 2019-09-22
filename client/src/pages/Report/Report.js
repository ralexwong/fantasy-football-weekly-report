import React, { Component } from "react";
import Nav from "../../components/Nav";
import { Col, Row, Container } from "../../components/Grid";
import Title from "../../components/Title";
import DateRow from "../../components/DateRow";
import Scoreboard from "../../components/Scoreboard";
import ScoreboardRow from "../../components/ScoreboardRow";
import PlayerCard from "../../components/PlayerCard";
import PureComponent from "../../components/GraphPPG";
import axios from 'axios';


class Report extends Component {
    state = {
      weekNum: 1,
      matchups: [1,2,3,4,5],
      leagueid: [],
      username: "",

    };

    initialDB = () => {
      
    }
    
  
    componentDidMount() {
      // axios.get(`https://api.sleeper.app/v1/user/wongman`).then(`
      //   response => {
      //     console.log(response.data);
      //   }
      // )
    }
  
    handleFormSubmit = event => {
      event.preventDefault();

    };
    
  
    render() {

      const divStyle = {
        border: '2px solid black'
      };

      const rowStyle = {
        padding: '0 50px 0 50px'
      }
      
      return (
        <div>
          <Nav />
          <Container style={divStyle} id="mainContainer">
            <Title />
            <DateRow weekNum={this.state.weekNum}/>
            <Row style={rowStyle}>
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
  
  export default Report;

  