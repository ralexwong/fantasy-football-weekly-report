import React, { Component } from "react";
import { connect } from 'react-redux';

import Title from "../../components/Title";
import DateRow from "../../components/DateRow";
import MiddleRow from './MiddleRow';
import GraphPoints from './GraphPoints';

import { Container } from "reactstrap"


class Report2 extends Component {
  render() {
    return (
      <Container className="reportContainer">
        <Title />
        <DateRow />
        <MiddleRow />
        <GraphPoints />
      </Container>
    );
  }

}

const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps)(Report2);
