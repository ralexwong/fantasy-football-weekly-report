import React from 'react';
import CanvasJSReact from '../../../canvasjs.react';

import { connect } from 'react-redux';
import { setGraphPointsToState, } from '../../../actions/Sleeper';

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
    console.log(this.props)

    let data = [];
    if (this.props.espnReport && this.props.espnGraphPoints) {
      data = this.props.espnGraphPoints
    } else if (this.props.sleeperReport && this.props.sleeperGraphPoints) {
      data = this.props.sleeperGraphPoints  
    } else {
      data = [
        { y:  1500, label: "Facebook" },
        { y:  1400, label: "YouTube" },
        { y:  1340, label: "Instagram" },
        { y:  1310, label: "Qzone" },
        { y:  1300, label: "Weibo" },
        { y:  1298, label: "Twitter" },
        { y:  1290, label: "Reddit" }
      ]
    }
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
    sleeperGraphPoints: state.sleeper.sleeperGraphPoints,

    espnReport: state.espn.espnReport,
    espnGraphPoints: state.espn.espnGraphPoints,
  }
}

export default connect(mapStateToProps, { setGraphPointsToState, })(GraphPoints)




