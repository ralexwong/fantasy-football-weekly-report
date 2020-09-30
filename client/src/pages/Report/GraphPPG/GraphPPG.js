import React from 'react';
import CanvasJSReact from '../../../canvasjs.react';
import { connect } from 'react-redux';

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
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
      this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  render() {
    let font_size = ""
    if (this.state.width < 575) {
      font_size = 6.9
    } else {
      font_size = 12
    }

    let graphPPG = []

    if (this.props.espnReport) {
      graphPPG = this.props.espnGraphPPG
    } else if (this.props.sleeperReport) {
      graphPPG = this.props.sleeperGraphPPG
    } 

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
    sleeperGraphPPG: state.sleeper.sleeperGraphPPG,

    espnReport: state.espn.espnReport,
    espnGraphPPG: state.espn.espnGraphPPG
  }
}

export default connect(mapStateToProps)(GraphPPG)




