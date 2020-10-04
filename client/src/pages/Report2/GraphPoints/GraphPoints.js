import React from 'react';
import CanvasJSReact from '../../../canvasjs.react';

import { connect } from 'react-redux';
import { Row, Col } from "reactstrap"

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class GraphPoints extends React.Component {
  addSymbols(e){
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}

  render() {
    let data = [];
    if (this.props.espnReport && this.props.espnPowerRanking) {
      data = this.props.espnPowerRanking
    } else if (this.props.sleeperReport && this.props.sleeperPowerRanking) {
      data = this.props.sleeperPowerRanking  
    } else {
      data = [
        { y:  1500, label: "User1" },
        { y:  1400, label: "User2" },
        { y:  1340, label: "User3" },
        { y:  1310, label: "User4" },
        { y:  1300, label: "User5" },
        { y:  1298, label: "User6" },
        { y:  1290, label: "User7" }
      ]
    }
    const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Power Rankings"
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
        <Col className="pointsGraph test">
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
    sleeperReport: state.sleeper.sleeperReport,
    sleeperPowerRanking: state.sleeper.sleeperPowerRanking,

    espnReport: state.espn.espnReport,
    espnPowerRanking: state.espn.espnPowerRanking,
  }
}

export default connect(mapStateToProps)(GraphPoints)




