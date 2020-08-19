import React, { Component } from 'react'
import { connect } from 'react-redux';
import { exportComponentAsPNG } from "react-component-export-image";
import { createEspnWeeklyReport } from '../../actions/Espn';
import { createSleeperWeeklyReport } from '../../actions/Sleeper';
import Report from "./Report"

class ComponentToPrint extends React.Component {
  render() {
    return (
      <>
        <Report />
      </>)
  }
}

class Example extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();

    if (this.props.location.pathname === "/weekly-report-espn") {
      this.props.createEspnWeeklyReport()
    } else if (this.props.location.pathname === "/weekly-report-sleeper") {
      this.props.createSleeperWeeklyReport()
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

export default connect(null, { createEspnWeeklyReport, createSleeperWeeklyReport })(Example);
