import React from "react";

import Title from "../../components/Title";
import DateRow from "../../components/DateRow";
import MiddleRow from './Middle';
import GraphPPG from "./GraphPPG";

const Report = () => {
  return (
    <div className="reportContainer">
      <Title />
      <DateRow />
      <MiddleRow />
      <GraphPPG />
    </div>
  );
}

export default Report