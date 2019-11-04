import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./intro.css";

class Index extends Component {
  componentDidMount() {}

  render() {
    return (
      <Container fluid>
        {/* MAIN CARD START -----------------------> */}
        <Row>
          <div className="block" id="main">
            <Container fluid>
              <h1 style={{ 'font-size': 100 }}>
                Fantasy Football Weekly Reports
              </h1>
              <Row style={{ 'align-content': 'center' }}>
                <Col id="imageDiv">
                  <img className="introImages" src="./images/fantasy.jpg" alt =""></img>
                </Col>
                <Col>
                  <img className="introImages" src="./images/fantasy2.jpg" alt=""></img>
                </Col>
              </Row>
            </Container>
          </div>
        </Row>
        {/* MAIN CARD END -----------------------> */}

        {/* ABOUT CARD START -----------------------> */}
        <Row>
          <div className="block" id="about">
            <h1 style={{ 'font-size': 100, 'margin-bottom': '50px' }}>How it Works!</h1>
            <h4 style={{ 'font-size': 40 }}>
              Navigate onto the first input page and click on the platform you would like to see the report for. Input your username, 
              click on your league, choose the week, BLAM!! Weekly report. Click on Report2 for the second page after you have inputted all the fields.
            </h4>
          </div>
        </Row>
        {/* ABOUT CARD START -----------------------> */}

        {/* DEVS CARD START -----------------------> */}
        <Row>
          <div className="block" id="team">
            <Link to="/input1">
              <h1 style={{ 'font-size': 100 }}>Let's Get Started!</h1>
            </Link>
          </div>
        </Row>
        {/* DEVS CARD START -----------------------> */}

        {/* DEVS CARD START -----------------------> */}
        <Row>
          <div className="block" id="policy">
              <p id="policyTitle">Corporate Policy</p>
              <p id="policyText">
                We are committed to complying with all U.S. regulations that
                help prevent, detect and remediate unlawful behavior by
                customers and virtual currency developers when using the
                Fantasy Football Weekly Report platform or any of the company’s other
                services. Fantasy Football Weekly Report is not a regulated exchange under U.S.
                securities laws.
              </p>
          </div>
        </Row>
        <Row>

        </Row>
        {/* DEVS CARD START -----------------------> */}
      </Container>
    );
  }
}

export default Index;
