import React from "react";
import Title from "../../components/Title";
import DateRow from "../../components/DateRow";
import MiddleRow from './MiddleRow';
import GraphPoints from './GraphPoints';

import { Container } from "reactstrap"


const Report2 = () => {
  return (
    <Container className="reportContainer">
      <Title />
      <DateRow />
      <MiddleRow />
      <GraphPoints />
    </Container>
  );
}

export default Report2;
