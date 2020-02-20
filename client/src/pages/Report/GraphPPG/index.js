import React from 'react';
import CanvasJSReact from '../../../canvasjs.react';
import { connect } from 'react-redux';
import { refactorData, removeGraphData, setGraphPointsToState } from '../../../actions/Sleeper';

import { Row, Col } from "reactstrap"


const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class GraphPPG extends React.Component {
  componentDidMount() {
    if (!this.props.matchups) {

    } else {
      this.refactorData(this.props.matchups)
    }
    console.log(this.props)
  }

  componentWillUnmount() {
    // this.props.removeGraphData()
  }

  refactorData = (matchups) => {
    let arr = [];

    console.log(matchups);
    for (let i = 0; i < matchups.length; i++) {
      if (parseFloat(matchups[i].points1) > parseFloat(matchups[i].points2)) {
        arr.push({ label: matchups[i].roster1, y: parseFloat(matchups[i].points1), color: "#00006b" });
        arr.push({ label: matchups[i].roster2, y: parseFloat(matchups[i].points2), color: "#b61e1e" });
      } else {
        arr.push({ label: matchups[i].roster1, y: parseFloat(matchups[i].points1), color: "#b61e1e" });
        arr.push({ label: matchups[i].roster2, y: parseFloat(matchups[i].points2), color: "#00006b" });
      }
    }

    console.log(arr);

    this.props.setGraphPointsToState(arr);
  }

  render() {
    console.log(this.props.graphPoints)
    const options = {
      animationEnabled: true,
      theme: "light2", //"light1", "dark1", "dark2"
      title: {
        text: "Points for the Week",
      },

      axisX: {
        labelFontSize: 12,
        labelAngle: -30
      },
      data: [{
        type: "column", //change type to bar, line, area, pie, etc
        //indexLabel: "{y}", //Shows y value on all Data Points
        indexLabelFontColor: "black",
        indexLabelPlacement: "outside",
        dataPoints: this.props.graphPoints
      }]
    }

    return (
      <Row>
        <Col className="pointsGraph">
          <CanvasJSChart options={options}
          // onRef={ref => this.chart = ref}
          />
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    matchups: state.sleeper.matchups,
    graphPoints: state.sleeper.graphPoints
  }
}

export default connect(mapStateToProps, { refactorData, removeGraphData, setGraphPointsToState })(GraphPPG)




