import React, { Component } from 'react'
import ReactToPrint from "react-to-print";

import Report from '../pages/Report/Report'

class Example extends React.Component {
    render() {
      return (
        <div>
          <ReactToPrint
            trigger={() => {
              // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
              // to the root node of the returned component as it will be overwritten.
              return <a href="#">Print this out!</a>;
            }}
            content={() => this.componentRef}
          />
        </div>
      );
    }
  }

export default Example
