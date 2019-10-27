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
              <h1>
                Fantasy Football Weekly Reports
              </h1>
              <h4>
                Choose your platform, input your username, choose the week, and your weekly report will be ready!
              </h4>
              <Row>
                <Col>
                  <img src="./images/fantasy.jpg" alt =""></img>
                </Col>
                <Col>
                  <img src="./images/fantasy2.jpg" alt=""></img>
                </Col>
              </Row>
            </Container>
          </div>
        </Row>
        {/* MAIN CARD END -----------------------> */}

        {/* ABOUT CARD START -----------------------> */}
        <Row>
          <div className="block" id="about">
            <Container>
              <Row>
                <Col size="6">
                  {/* <p className="aboutTitle">How it Works!</p> */}
                  <h2>How it Works!</h2>
                  <h4>
                    Navigate onto the first input page and click on the platform you would like to see the report for. Input your username, 
                    click on your league, choose the week, BLAM!! Weekly report.
                  </h4>
                </Col>
              </Row>
            </Container>
          </div>
        </Row>
        {/* ABOUT CARD START -----------------------> */}

        {/* DEVS CARD START -----------------------> */}
        <Row>
          <div className="block" id="team">
            <Row>
              <Link to="/input">
                <h1>Let's Get Started!</h1>
              </Link>
            </Row>
          </div>
        </Row>
        {/* DEVS CARD START -----------------------> */}

        {/* DEVS CARD START -----------------------> */}
        <Row>
          <div className="block" id="policy">
            <Container>
              <p id="policyTitle">Corporate Policy</p>
              <p id="policyText">
                We are committed to complying with all U.S. regulations that
                help prevent, detect and remediate unlawful behavior by
                customers and virtual currency developers when using the
                Fantasy Football Weekly Report platform or any of the company’s other
                services. Fantasy Football Weekly Report is not a regulated exchange under U.S.
                securities laws.
              </p>
            </Container>
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
