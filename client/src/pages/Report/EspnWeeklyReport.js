import React, { Component } from 'react'
import { connect } from 'react-redux';
import { exportComponentAsPNG } from "react-component-export-image";
import { createEspnWeeklyReport } from '../../actions/Espn';
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

class EspnWeeklyReport extends Component {
  constructor() {
    super()
    this.componentRef = React.createRef();

    if (this.props.location.pathname === "/weekly-report-espn") {
      this.props.createEspnWeeklyReport()
    }

  }

  render() {
    return (
      <>
        <ComponentToPrint ref={this.componentRef} />
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <button className="btn btn--espn" onClick={() => exportComponentAsPNG(this.componentRef)}>
            Click here for your report to be converted to an image!
        </button>
        </div>
      </>
    )
  }
}

export default connect(null, { createEspnWeeklyReport })(EspnWeeklyReport);
