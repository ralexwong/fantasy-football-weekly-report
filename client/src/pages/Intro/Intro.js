import React, { Component } from "react";
import Header from './Header'
import About from './About'
import Features from './Features'

class Index extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Header />
        <About />
        <Features />
      </div>
    );
  }
}

export default Index;
