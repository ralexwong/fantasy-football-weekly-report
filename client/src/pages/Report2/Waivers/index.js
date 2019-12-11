import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { setWaiversToState } from '../../../actions';
import Row from 'react-bootstrap/Row';


import Table from 'react-bootstrap/Table'

class Waivers extends Component {
    componentDidMount() {
        if (!this.props.roster) {

        } else {
          this.refactorData(this.props.roster, this.props.league_info)
        }
    }

    refactorData = (roster, league_info) => {
        let combinedObjects = [];
        console.log(roster);
        for (let i = 0; i < roster.length; i++) {
          let settings = roster[i].settings;
          let waiverOrder = settings.waiver_position;
          let budget = (100 - settings.waiver_budget_used);
          combinedObjects.push({ name: roster[i].owner_id, waiverOrder: waiverOrder, budget: budget })
        }
    
        for (let i = 0; i < league_info.length; i++) {
          for (let j = 0; j < roster.length; j++) {
            if (league_info[i].user_id === combinedObjects[j].name) {
              combinedObjects[j].name = league_info[i].display_name;
            }
          }
        }
        combinedObjects.sort((a, b) => (a.waiverOrder > b.waiverOrder) ? 1 : -1)
        console.log(combinedObjects);
        this.props.setWaiversToState(combinedObjects);
    }

    render() {
        return (
            <Fragment>
                <Row>
                    <p className="cardTitle">WAIVER ORDER</p>
                </Row>
                <Table striped bordered >
                    <thead>
                        <tr>
                        <th>Team Name</th>
                        <th>Order</th>
                        <th>Budget</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.waivers ? 
                        (
                            this.props.waivers.map(player => (
                                <tr key={player.waiverOrder}>
                                    <td>{player.name}</td>
                                    <td>{player.waiverOrder}</td>
                                    <td>{player.budget}</td>
                                </tr>
                            ))
                        ) : 
                        ('')}
                    </tbody>
                </Table>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        league_info: state.sleeper.league_info,
        roster: state.sleeper.roster,
        waivers: state.sleeper.waivers
    }
}

export default connect(mapStateToProps, { setWaiversToState })(Waivers)