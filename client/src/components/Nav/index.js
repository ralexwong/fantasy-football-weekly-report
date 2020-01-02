import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "../../sass/main.scss";



class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
        <Link className="navbar-brand" to="/">
          FFWR
        </Link>
        <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/report" ? "nav-link active" : "nav-link"}
                to="/report"
              >
                Report
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/report2" ? "nav-link active" : "nav-link"}
                to="/report2"
              >
                Report2
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/payouts" ? "nav-link active" : "nav-link"}
                to="/payouts"
              >
                Payouts
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/input1" ? "nav-link active" : "nav-link"}
                to="/input1"
              >
                Input1
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/input2" ? "nav-link active" : "nav-link"}
                to="/input2"
              >
                Input2
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/input3" ? "nav-link active" : "nav-link"}
                to="/input3"
              >
                Input3
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
