import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from "reactstrap"

import Table from 'react-bootstrap/Table'

class Recap extends Component {
  render() {
    console.log(this.props)
    let week = "";
    if (this.props.espnReport && this.props.espnWeek) {
      week = this.props.espnWeek
    } else if (this.props.sleeperReport && this.props.sleeperWeek) {
      week = this.props.sleeperWeek;
    }

    let recap = [];
    if (this.props.espnReport && this.props.espnRecap) {
      recap = this.props.espnRecap
    } else if (this.props.sleeperReport && this.props.sleeperRecap) {
      recap = this.props.sleeperRecap
    }

    if (this.props.border) {
      return (
        <Col className="recap" style={{ border: "none" }}>
          <p className="reportTitle">NUMBERS RECAP</p>
          <Table bordered >
            <thead>
              <tr>
                <th className="recap__week" colSpan="7">Week {week}</th>
              </tr>
              <tr>
                <th>Team</th>
                <th>Rank</th>
                <th>PF/G</th>
                <th>PF</th>
                <th>PA</th>
                <th>W</th>
                <th>L</th>
              </tr>
            </thead>
            <tbody borderless="true">
              {(recap ? 
                (
                  recap.map((row, i) => (
                    <tr key={i}>
                      <td>{row.abbrev}</td>
                      <td>{(i+1)}</td>
                      <td className={row.PPGcolor}>{row.PPG}</td>
                      <td className={row.PFcolor}>{row.PF}</td>
                      <td className={row.PAcolor}>{row.PA}</td>
                      <td>{row.wins}</td>
                      <td>{row.losses}</td>
                    </tr>
                  ))
                ) 
                : 
                (<tr></tr>))}
            </tbody>
          </Table>
        </Col>
      )
    }
    else {
      return (
        <Col className="recap">
          <p className="reportTitle">NUMBERS RECAP</p>
          <Table bordered >
            <thead>
              <tr>
                <th className="recap__week" colSpan="7">Week {week}</th>
              </tr>
              <tr>
                <th>Team</th>
                <th>Rank</th>
                <th>PF/G</th>
                <th>PF</th>
                <th>PA</th>
                <th>W</th>
                <th>L</th>
              </tr>
            </thead>
            <tbody borderless="true">
              {(recap ? 
                (
                  recap.map((row, i) => (
                    <tr key={i}>
                      <td>{row.abbrev}</td>
                      <td>{(i+1)}</td>
                      <td className={row.PPGcolor}>{row.PPG}</td>
                      <td className={row.PFcolor}>{row.PF}</td>
                      <td className={row.PAcolor}>{row.PA}</td>
                      <td>{row.wins}</td>
                      <td>{row.losses}</td>
                    </tr>
                  ))
                ) 
                : 
                (<tr></tr>))}
            </tbody>
          </Table>
        </Col>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    sleeperReport: state.sleeper.sleeperReport,
    sleeperWeek: state.sleeper.sleeperWeek,
    sleeperRecap: state.sleeper.sleeperRecap,

    espnReport: state.espn.espnReport,
    espnRecap: state.espn.espnRecap,
    espnWeek: state.espn.espnWeek,
  }
}

export default connect(mapStateToProps)(Recap)