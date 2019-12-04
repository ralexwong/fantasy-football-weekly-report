import React, { Component } from "react";
import Header from '../../components/Intro/Header'
import { Link } from "react-router-dom";

import styles from "./intro.module.scss";

class Index extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        landing page under contruction
        <Link to="/input1">
          check out main app here!
        </Link>
        <Header />
      </div>
    );
  }
}

export default Index;
