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
                <button onClick={() => exportComponentAsJPEG(this.componentRef)}>
           Export As PDF
       </button>
            </>
        )
    }
}
