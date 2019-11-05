import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import { connect } from 'react-redux';
import { fetchGraphPPG, setGraphPointsToState, removeGraphData } from '../../../actions';
import './style.css'



class GraphPoints extends React.Component {
  componentDidMount() {
    if (!this.props.roster) {

    } else {
      this.refactorData(this.props.roster, this.props.league_info)
    }
  }

  componentWillUnmount() {
    this.props.removeGraphData()
  }

  refactorData = (roster, league_info) => {
    let combinedObjects = [];
    console.log(roster);
    for (let i = 0; i < roster.length; i++) {
      let settings = roster[i].settings;
      let PF = settings.fpts;
      let PA = settings.fpts_against;
      combinedObjects.push({ name: roster[i].owner_id, PF: PF, PA: PA })
    }

    for (let i = 0; i < league_info.length; i++) {
      for (let j = 0; j < roster.length; j++) {
        if (league_info[i].user_id === combinedObjects[j].name) {
          combinedObjects[j].name = league_info[i].display_name;
        }
      }
    }
    console.log(combinedObjects);
    this.props.setGraphPointsToState(combinedObjects)
  }


  render() {

    const data = (this.props.graphPoints ? (this.props.graphPoints) : ('') )
    return (
      <div style={{ 'margin-top': '30px' }}>
          <div id="graphTitle">
            <p>Cumulative PF and PA</p>
          </div>
          <BarChart
            width={1300}
            height={700}
            data={data}
            margin={{
              top: 20, right: 70, left: 20
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="left" stroke="rgb(0, 0, 107)" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Legend width={100} wrapperStyle={{ top: 20, right: 130, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '20px' }} />
            <Bar yAxisId="left" dataKey="PF" fill="rgb(0, 0, 107)" />
            <Bar yAxisId="right" dataKey="PA" fill="#82ca9d" />
          </BarChart>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    league_id: state.sleeper.league_id,
    roster: state.sleeper.roster,
    league_info: state.sleeper.league_info,
    data: state.sleeper.graphPPG,
    graphPoints: state.sleeper.graphPoints
  }
}

export default connect(mapStateToProps, { fetchGraphPPG, setGraphPointsToState, removeGraphData })(GraphPoints)




