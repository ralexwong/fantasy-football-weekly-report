import React from 'react';
import CanvasJSReact from '../../../canvasjs.react';
import { connect } from 'react-redux';
import { fetchGraphPPG, refactorData, removeGraphData } from '../../../actions';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

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

    
    this.props.refactorData(combinedObjects)
  }

  render() {
    const options = {
      animationEnabled: true,
      theme: "light2", //"light1", "dark1", "dark2"
      title: {
        text: "Points for the Week",
      },
      data: [{
        type: "column", //change type to bar, line, area, pie, etc
        //indexLabel: "{y}", //Shows y value on all Data Points
        indexLabelFontColor: "#5A5757",
        indexLabelPlacement: "outside",
        dataPoints: [
          { x: 10, y: 71 },
          { x: 20, y: 55 },
          { x: 30, y: 50 },
          { x: 40, y: 65 },
          { x: 50, y: 71 },
          { x: 60, y: 68 },
          { x: 70, y: 38 },
          { x: 80, y: 92, indexLabel: "Highest" },
          { x: 90, y: 54 },
          { x: 100, y: 60 },
          { x: 110, y: 21 },
          { x: 120, y: 49 },
          { x: 130, y: 36 }
        ]
      }]
    }

    return (
      <Row>
        <Col className="pointsGraph">
          <CanvasJSChart options={options}
          onRef={ref => this.chart = ref}
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
    data: state.sleeper.graphPPG
  }
}

export default connect(mapStateToProps, { fetchGraphPPG, refactorData, removeGraphData })(GraphPPG)




