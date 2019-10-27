import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchAvater } from '../../actions';

import Title from "../../components/Title";
import DateRow from "../../components/DateRow";
import Scoreboard from "../../components/Scoreboard";
import ScoreboardRow from "../../components/ScoreboardRow";
import PlayerCard from "../../components/PlayerCard";
import PureComponent from "../../components/GraphPPG";

import Container from "react-bootstrap/container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




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
          <DateRow weekNum={this.state.weekNum}/>
          <Row style={rowStyle}>
            <Col className="col-6">
              <Scoreboard weekNum={this.state.weekNum}/>
              {this.state.matchups.map(matchup => (
                <ScoreboardRow key={matchup}/>
              ))}
            </Col>
            <Col className="col-6">
              <Row>
                <Col className="col-6">
                  <PlayerCard />
                </Col>
              </Row>
              <Row>
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

const mapStateToProps = (state) => {

}
  
export default connect(null, { fetchAvater })(Report);

  