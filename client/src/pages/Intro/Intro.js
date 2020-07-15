import React, { Component } from "react";
import Header from './Header'
import About from './About'
import Features from './Features'
import Platforms from './Platforms'
import Reviews from './Reviews'
import Register from './Register'
// import IntroNav from "./Nav";

import Footer from '../../components/Footer'

const style = {
  color: "#777"
}

class Index extends Component {
  componentDidMount() {}

  render() {
    return (
      <div style={style} >
        {/* <IntroNav /> */}
        <Header />
        <About />
        <Features />
        <Platforms />
        <Reviews />
        <Register />
        <Footer />
      </div>
    );
  }
}

export default Index;
