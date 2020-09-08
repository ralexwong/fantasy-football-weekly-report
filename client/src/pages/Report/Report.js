import React, { Component } from "react";

import Title from "../../components/Title";
import DateRow from "../../components/DateRow";
import MiddleRow from './Middle';
import GraphPPG from "./GraphPPG";

import { Container } from "reactstrap"

class Report extends Component {
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

export default Report