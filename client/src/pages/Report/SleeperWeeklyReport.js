import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { exportComponentAsPNG } from "react-component-export-image";
import { createSleeperWeeklyReport } from '../../actions/Sleeper';
import Report from "./Report"

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div style={{ padding: "1rem" }}>
        <Report />
      </div>
    )
  }
}

class SleeperWeeklyReport extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();

    if (this.props.location.pathname === "/weekly-report-sleeper") {
      this.props.createSleeperWeeklyReport()
    }
  }

  render() {
    return (
      <>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <button className="btn btn--sleeper" onClick={() => exportComponentAsPNG(this.componentRef)}>
            Click here for your report to be converted to an image!
          </button>
        </div>
        <ComponentToPrint ref={this.componentRef} />
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <button className="btn btn--sleeper">
            <Link to="/overall-report-sleeper">Click here for the overall report!</Link>
          </button>
        </div>
      </>
    )
  }
}

export default connect(null, { createSleeperWeeklyReport })(SleeperWeeklyReport);
