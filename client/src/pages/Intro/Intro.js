import React, { Component } from "react";
import Header from './Header'
import About from './About'
import Features from './Features'
import Platforms from './Platforms'

class Index extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Header />
        <About />
        <Features />
        <Platforms />
      </div>
    );
  }
}

export default Index;
