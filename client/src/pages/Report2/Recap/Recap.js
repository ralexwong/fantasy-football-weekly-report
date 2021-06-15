import React from 'react';
import { useSelector } from 'react-redux';

const Recap = () => {
  const state = useSelector((state) => state)

  let week = "";
  if (state.espn.espnReport && state.espn.espnWeek) {
    week = state.espn.espnWeek
  } else if (state.sleeper.sleeperReport && state.sleeper.sleeperWeek) {
    week = state.sleeper.sleeperWeek;
  }

  let recap = [];
  if (state.espn.espnReport && state.espn.espnRecap) {
    recap = state.espn.espnRecap
  } else if (state.sleeper.sleeperReport && state.sleeper.sleeperRecap) {
    recap = state.sleeper.sleeperRecap
  }

  return (
    <div className="recap">
      <p className="reportTitle">NUMBERS RECAP</p>
      <table>
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
      </table>
    </div>
  )
}

export default Recap;