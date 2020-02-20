import React from 'react';
import CanvasJSReact from '../../../canvasjs.react';

import { connect } from 'react-redux';
import { fetchGraphPPG, setGraphPointsToState, removeGraphData } from '../../../actions/Sleeper';

import { Row, Col } from "reactstrap"


const CanvasJSChart = CanvasJSReact.CanvasJSChart;

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

    this.props.setGraphPointsToState(combinedObjects)
  }


  render() {

    console.log(this.props.data)
    const options = {
      animationEnabled: true,	
      title:{
        text: "Points For and Points Against"
      },
      axisY : {
        title: "Point Total",
        includeZero: false
      },
      toolTip: {
        shared: true
      },
      data: [{
        type: "spline",
        name: "2016",
        showInLegend: true,
        dataPoints: [
          { y: 155, label: "Jan" },
          { y: 150, label: "Feb" },
          { y: 152, label: "Mar" },
          { y: 148, label: "Apr" },
          { y: 142, label: "May" },
          { y: 150, label: "Jun" },
          { y: 146, label: "Jul" },
          { y: 149, label: "Aug" },
          { y: 153, label: "Sept" },
          { y: 158, label: "Oct" },
          { y: 154, label: "Nov" },
          { y: 150, label: "Dec" }
        ]
      },
      {
        type: "spline",
        name: "2017",
        showInLegend: true,
        dataPoints: [
          { y: 172, label: "Jan" },
          { y: 173, label: "Feb" },
          { y: 175, label: "Mar" },
          { y: 172, label: "Apr" },
          { y: 162, label: "May" },
          { y: 165, label: "Jun" },
          { y: 172, label: "Jul" },
          { y: 168, label: "Aug" },
          { y: 175, label: "Sept" },
          { y: 170, label: "Oct" },
          { y: 165, label: "Nov" },
          { y: 169, label: "Dec" }
        ]
      }]
  }

    return (
      <Row style={{ 'marginTop': '30px' }}>
        <Col>
          <CanvasJSChart options = {options}
              /* onRef = {ref => this.chart = ref} */
          />
        </Col>
      </Row>
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




