import React from 'react';
import { useSelector } from 'react-redux';
import CanvasJSReact from '../../../canvasjs.react';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const GraphPoints = () => {
  const state = useSelector((state) => state)

  const addSymbols = (e) => {
		let suffixes = ["", "K", "M", "B"];
		let order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		let suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}

  let data = [];
  if (state.espn.espnReport && state.espn.espnPowerRanking) {
    data = state.espn.espnPowerRanking
  } else if (state.sleeper.sleeperReport && state.sleeper.sleeperPowerRanking) {
    data = state.sleeper.sleeperPowerRanking  
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
      labelFormatter: addSymbols
    },
    data: [{
      type: "bar",
      dataPoints: data
    }]
  }

  return (
      <div className="pointsGraph">
        <CanvasJSChart options = {options}
            /* onRef = {ref => this.chart = ref} */
        />
      </div>
  );
}

export default GraphPoints;




