import React, { Component } from 'react'
import { exportComponentAsPNG } from "react-component-export-image";
import { createEspnOverallReport } from '../../actions/Espn';
import { createSleeperOverallReport } from '../../actions/Sleeper';
import Report2 from "./Report2"
import { connect } from 'react-redux';

class ComponentToPrint extends React.Component {
  render() {
    return (
      <>
        <Report2 />
      </>)
  }
}

class SleeperOverallReport extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();

    if (this.props.location.pathname === "/overall-report-espn") {
      this.props.createEspnOverallReport()
    } else if (this.props.location.pathname === "/overall-report-sleeper") {
      this.props.createSleeperOverallReport()
    }
  }
  
  render() {
    return (
      <>
        <ComponentToPrint ref={this.componentRef} />
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <button className="btn btn--blue" onClick={() => exportComponentAsPNG(this.componentRef)}>
            Click here for your report to be converted to an image!
        </button>
        </div>
      </>
    )
  }
}

export default connect(null, { createEspnOverallReport, createSleeperOverallReport })(SleeperOverallReport)
