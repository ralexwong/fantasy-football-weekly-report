import React, { Component } from 'react'
import { exportComponentAsPNG } from "react-component-export-image";
import Report2 from "./Report2"

class ComponentToPrint extends React.Component {
  render() {
    return (
      <>
        <Report2 />
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
