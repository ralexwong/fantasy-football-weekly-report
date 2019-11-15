import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import { connect } from 'react-redux';
import { fetchGraphPPG, refactorData, removeGraphData } from '../../actions';
import './style.css'



class GraphPPG extends React.Component {
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
    
    for (let i = 0; i < roster.length; i++) {
      let settings = roster[i].settings;
      let PPG = (parseInt(settings.fpts) / (parseInt(settings.wins) + parseInt(settings.losses)))
      combinedObjects.push({ name: roster[i].owner_id, wins: settings.wins, PPG: PPG })
    }

    for (let i = 0; i < league_info.length; i++) {
      for (let j = 0; j < roster.length; j++) {
        if (league_info[i].user_id === combinedObjects[j].name) {
          combinedObjects[j].name = league_info[i].display_name;
        }
      }
    }
    this.props.refactorData(combinedObjects)
  }

  render() {
    const data = (this.props.data ? (this.props.data) : ( ''
    //   [{
    //     name: 'Page A', wins: 4000, pv: 2400, amt: 2400,
    //   },
    //   {
    //     name: 'Page B', wins: 3000, pv: 1398, amt: 2210,
    //   },
    //   {
    //     name: 'Page C', wins: 2000, pv: 9800, amt: 2290,
    //   },
    //   {
    //     name: 'Page D', wins: 2780, pv: 3908, amt: 2000,
    //   },
    //   {
    //     name: 'Page E', wins: 1890, pv: 4800, amt: 2181,
    //   },
    //   {
    //     name: 'Page F', wins: 2390, pv: 3800, amt: 2500,
    //   },
    //   {
    //     name: 'Page G', wins: 3490, pv: 4300, amt: 2100,
    //   },
    ))
    return (
      <div style={{ 'margin-top': '30px' }}>
          <div id="graphTitle">
            <p>Wins and PPG</p>
          </div>
          <BarChart
            width={1200}
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
            <Bar yAxisId="left" dataKey="PPG" fill="rgb(0, 0, 107)" />
            <Bar yAxisId="right" dataKey="wins" fill="#82ca9d" />
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
    data: state.sleeper.graphPPG
  }
}

export default connect(mapStateToProps, { fetchGraphPPG, refactorData, removeGraphData })(GraphPPG)




