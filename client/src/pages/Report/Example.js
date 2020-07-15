import React, { Component } from 'react'
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from "react-component-export-image";
import Report from "../Report/Report"
import Sleeper from '../Sleeper/Sleeper1'

class ComponentToPrint extends React.Component {
  render() {
    return (
      <>
        <Report />
      </>)
  }
}

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
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
