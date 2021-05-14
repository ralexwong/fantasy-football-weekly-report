import React from "react";
import Title from "../../components/Title";
import DateRow from "../../components/DateRow";
import MiddleRow from './MiddleRow';
import GraphPoints from './GraphPoints';

const Report2 = () => {
  return (
    <div className="reportContainer col">
      <Title />
      <DateRow />
      <MiddleRow />
      <GraphPoints />
    </div>
  );
}

export default Report2;
