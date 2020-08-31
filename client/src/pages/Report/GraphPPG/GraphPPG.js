import React from 'react';
import CanvasJSReact from '../../../canvasjs.react';
import { connect } from 'react-redux';
import { refactorData, setGraphPPG } from '../../../actions/Sleeper';

import { Row, Col } from "reactstrap"


const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class GraphPPG extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        width: 0,
        height: 0
    }
  }

  componentDidMount() {
    if (!this.props.matchups) {

    } else {
      this.refactorData(this.props.matchups)
    }
    console.log(this.props)

    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  refactorData = (matchups) => {
    let arr = [];

    for (let i = 0; i < matchups.length; i++) {
      if (parseFloat(matchups[i].points1) > parseFloat(matchups[i].points2)) {
        arr.push({ label: matchups[i].roster1, y: parseFloat(matchups[i].points1), color: "#00006b" });
        arr.push({ label: matchups[i].roster2, y: parseFloat(matchups[i].points2), color: "#b61e1e" });
      } else {
        arr.push({ label: matchups[i].roster1, y: parseFloat(matchups[i].points1), color: "#b61e1e" });
        arr.push({ label: matchups[i].roster2, y: parseFloat(matchups[i].points2), color: "#00006b" });
      }
    }
    console.log(arr)
    this.props.setGraphPPG(arr);
  }

  render() {

    let font_size = ""
    if (this.state.width < 575) {
      font_size = 7
    } else {
      font_size = 12
    }

    console.log(this.props)
    let graphPPG = []

    if (this.props.espnReport && this.props.espnGraphPPG) {
      graphPPG = this.props.espnGraphPPG
    } else if (this.props.sleeperReport && this.props.sleeperGraphPPG) {
      graphPPG = this.props.sleeperGraphPPG
    } 

    console.log(graphPPG)
    const options = {
      animationEnabled: true,
      theme: "light2", //"light1", "dark1", "dark2"
      title: {
        text: "Points for the Week",
      },

      axisX: {
        labelFontSize: font_size,
        labelAngle: -30,
        margin: 30
      },
      data: [{
        type: "column", //change type to bar, line, area, pie, etc
        //indexLabel: "{y}", //Shows y value on all Data Points
        indexLabelFontColor: "black",
        indexLabelPlacement: "outside",
        dataPoints: graphPPG
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
    sleeperReport: state.sleeper.sleeperReport,
    matchups: state.sleeper.matchups,
    sleeperGraphPPG: state.sleeper.sleeperGraphPPG,

    espnReport: state.espn.espnReport,
    espnGraphPPG: state.espn.espnGraphPPG
  }
}

export default connect(mapStateToProps, { refactorData, setGraphPPG })(GraphPPG)




