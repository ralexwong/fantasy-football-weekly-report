import React, { Component } from "react";
import Header from './Header'
import About from './About'

class Index extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Header />
        <About />
      </div>
    );
  }
}

export default Index;
