import React from 'react';
import CanvasJSReact from '../../../canvasjs.react';

import { connect } from 'react-redux';
import { fetchGraphPPG, setGraphPointsToState, removeGraphData } from '../../../actions/Sleeper';

import { Row, Col } from "reactstrap"


const CanvasJS = CanvasJSReact.CanvasJS;
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

  addSymbols(e){
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}

  refactorData = (roster, league_info) => {
    let combinedObjects = []
    
    for (let i = 0; i < roster.length; i++) {
      let settings = roster[i].settings;
      let PF = settings.fpts;
      combinedObjects.push({ label: roster[i].owner_id, y: PF })
    }

    for (let i = 0; i < league_info.length; i++) {
      for (let j = 0; j < roster.length; j++) {
        if (league_info[i].user_id === combinedObjects[j].label) {
          combinedObjects[j].label = league_info[i].display_name;
        }
      }
    }
    
    console.log(combinedObjects)

    this.props.setGraphPointsToState(combinedObjects)
  }


  render() {

    console.log(this.props)
    let data = this.props.graphPoints ? this.props.graphPoints : [
      { y:  1500, label: "Facebook" },
      { y:  1400, label: "YouTube" },
      { y:  1340, label: "Instagram" },
      { y:  1310, label: "Qzone" },
      { y:  1300, label: "Weibo" },
      { y:  1298, label: "Twitter" },
      { y:  1290, label: "Reddit" }
    ]
    const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Total Points"
			},
			axisX: {
				reversed: true,
			},
			axisY: {
				includeZero: true,
				labelFormatter: this.addSymbols
			},
			data: [{
				type: "bar",
				dataPoints: data
			}]
		}

    return (
      <Row>
        <Col classname="pointsGraph">
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




