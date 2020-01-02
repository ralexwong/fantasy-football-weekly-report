import React, { Component } from "react";
import Header from './Header'
import About from './About'
import Features from './Features'
import Platforms from './Platforms'
import Reviews from './Reviews'
import Register from './Register'
import IntroNav from "./Nav";

class Index extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <IntroNav />
        <Header />
        <About />
        <Features />
        <Platforms />
        <Reviews />
        <Register />
      </div>
    );
  }
}

export default Index;
