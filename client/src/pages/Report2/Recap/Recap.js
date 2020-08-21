import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRecapToState } from '../../../actions/Sleeper';
import { Col } from "reactstrap"


import Table from 'react-bootstrap/Table'

class Recap extends Component {
  componentDidMount() {
    if (!this.props.roster) {

    } else {
      this.refactorData(this.props.roster, this.props.league_info)
    }
  }

  refactorData = (roster, league_info) => {
    let combinedObjects = [];
    console.log(roster);
    
    for (let i = 0; i < roster.length; i++) {
      let settings = roster[i].settings;
      let PPG = parseFloat((parseInt(settings.fpts) / (parseInt(settings.wins) + parseInt(settings.losses))).toFixed(2));
      let PF = settings.fpts;
      let PA = settings.fpts_against;
      let wins = parseInt(settings.wins);
      let losses = parseInt(settings.losses);

      combinedObjects.push({
        name: roster[i].owner_id,
        PPG: PPG,
        PF: PF,
        PA: PA,
        wins: wins,
        losses: losses
      })
    }

    for (let i = 0; i < league_info.length; i++) {
      for (let j = 0; j < roster.length; j++) {
        if (league_info[i].user_id === combinedObjects[j].name) {
          combinedObjects[j].name = league_info[i].display_name;

          let shortenTeamName = combinedObjects[j].name.toUpperCase().substring(0,4)
          combinedObjects[j].abbrev = shortenTeamName;
        }
      }
    }

    combinedObjects.sort((a, b) => (a.PPG < b.PPG) ? 1 : -1);
    for (let i = 0; i < combinedObjects.length; i++) {
      combinedObjects[i].PPGcolor = `color${(i + 1)}`;
    }

    combinedObjects.sort((a, b) => (a.PF < b.PF) ? 1 : -1);
    for (let i = 0; i < combinedObjects.length; i++) {
      combinedObjects[i].PFcolor = `color${(i + 1)}`;
    }

    combinedObjects.sort((a, b) => (a.PA > b.PA) ? 1 : -1);
    for (let i = 0; i < combinedObjects.length; i++) {
      combinedObjects[i].PAcolor = `color${(i + 1)}`;
    }


    combinedObjects.sort((a, b) => (a.wins < b.wins) ? 1 : (a.wins === b.wins) ? ((a.PF < b.PF) ? 1 : -1) : -1)


    console.log(combinedObjects);
    this.props.setRecapToState(combinedObjects);
  }

  render() {
    console.log(this.props)
    let week = "";
    if (this.props.espnReport) {
        week = this.props.espnWeek
    } else if (this.props.sleeperReport) {
        week = this.props.sleeperWeek;
    }

    let recap = [];
    if (this.props.espnReport) {
      recap = this.props.espnRecap
    } else if (this.props.sleeperReport) {
      recap = this.props.sleeperRecap
    }

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
                  <tr key={row.team}>
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

const mapStateToProps = (state) => {
  return {
    sleeperReport: state.sleeper.sleeperReport,
    league_info: state.sleeper.league_info,
    roster: state.sleeper.roster,
    week: state.sleeper.sleeperWeek,
    sleeperRecap: state.sleeper.sleeperRecap,

    espnReport: state.espn.espnReport,
    espnRecap: state.espn.espnRecap,
    espnWeek: state.espn.espnWeek,
  }
}

export default connect(mapStateToProps, { setRecapToState })(Recap)