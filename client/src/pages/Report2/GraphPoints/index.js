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
    let rosterData = [];
    let wins = []
    let totalPoints = []
    let combinedObjects = {}
    
    for (let i = 0; i < roster.length; i++) {
      let settings = roster[i].settings;
      let PF = settings.fpts;
      let PA = settings.fpts_against;
      let tempWins = settings.wins
      rosterData.push({ name: roster[i].owner_id, PF: PF, PA: PA, wins: tempWins })
    }

    for (let i = 0; i < league_info.length; i++) {
      for (let j = 0; j < roster.length; j++) {
        if (league_info[i].user_id === rosterData[j].name) {
          rosterData[j].name = league_info[i].display_name;
        }
      }
    }

    for (let i = 0; i < rosterData.length; i++) {
      wins.push({ name: rosterData[i].name, wins: rosterData[i].wins })
    }

    for (let i = 0; i < rosterData.length; i++) {
      totalPoints.push({ name: rosterData[i].name, totalPoints: rosterData[i].PF })
    }
    
    combinedObjects.wins = wins;
    combinedObjects.totalPoints = totalPoints;
    console.log(combinedObjects)

    this.props.setGraphPointsToState(combinedObjects)
  }


  render() {

    console.log(this.props)
		const options = {
			theme: "light2",
			animationEnabled: true,
			title:{
				text: "Total Points and Wins"
			},
			axisX: {
				title: "States"
			},
			axisY: {
				titleFontColor: "#6D78AD",
				lineColor: "#6D78AD",
				labelFontColor: "#6D78AD",
				tickColor: "#6D78AD",
				includeZero: false
			},
			axisY2: {
				titleFontColor: "#51CDA0",
				lineColor: "#51CDA0",
				labelFontColor: "#51CDA0",
				tickColor: "#51CDA0",
				includeZero: false
			},
			toolTip: {
				shared: true
			},
			data: [{
				type: "column",
				name: "Total Points",
				showInLegend: true,
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "#,##0",
				dataPoints: [
					{ x: new Date(2017, 0, 1), y: 120 },
					{ x: new Date(2017, 1, 1), y: 135 },
					{ x: new Date(2017, 2, 1), y: 144 },
					{ x: new Date(2017, 3, 1), y: 103 },
					{ x: new Date(2017, 4, 1), y: 93 },
					{ x: new Date(2017, 5, 1), y: 129 },
					{ x: new Date(2017, 6, 1), y: 143 },
					{ x: new Date(2017, 7, 1), y: 156 },
					{ x: new Date(2017, 8, 1), y: 122 },
					{ x: new Date(2017, 9, 1), y: 106 },
					{ x: new Date(2017, 10, 1), y: 137 },
					{ x: new Date(2017, 11, 1), y: 142 }
				]
			},
			{
				type: "column",
				name: "Wins",
				axisYType: "secondary",
				showInLegend: true,
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "   #,##0",
				dataPoints: [
					{ x: new Date(2017, 0, 1), y: 19034.5 },
					{ x: new Date(2017, 1, 1), y: 20015 },
					{ x: new Date(2017, 2, 1), y: 27342 },
					{ x: new Date(2017, 3, 1), y: 20088 },
					{ x: new Date(2017, 4, 1), y: 20234 },
					{ x: new Date(2017, 5, 1), y: 29034 },
					{ x: new Date(2017, 6, 1), y: 30487 },
					{ x: new Date(2017, 7, 1), y: 32523 },
					{ x: new Date(2017, 8, 1), y: 20234 },
					{ x: new Date(2017, 9, 1), y: 27234 },
					{ x: new Date(2017, 10, 1), y: 33548 },
					{ x: new Date(2017, 11, 1), y: 32534 }
				]
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




