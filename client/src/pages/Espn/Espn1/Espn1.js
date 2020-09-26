import React, { Component } from "react";
import { connect } from 'react-redux';
import { setEspnWeek } from '../../../actions/Espn';

import { Jumbotron } from 'reactstrap';

class Espn1 extends Component {
    constructor() {
        super()
        this.state = {
            input: ""
        }
    }
    handleChange = (e) => {
        this.setState({ input: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log()
        this.props.setEspnWeek(
            parseInt(this.state.input), 
            this.props.espn, 
            this.props.espnSchedule
        )
    }

    render() {
        return (
            <Jumbotron className="sleeper__jumbotron">
                <p className="sleeper__helpertext">
                    Please enter the week
                </p>
                <form onSubmit={this.onSubmit} className="espnForm">
                    <input
                        required
                        className="sleeper__input"
                        onChange={this.handleChange}
                        autoComplete="off"
                        placeholder="week"
                        type="number"
                    />
                    <button onClick={this.onSubmit} type="button" className="btn btn--espn">Submit</button>
                </form>
            </Jumbotron>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        espn: state.espn.espn,
        espnSchedule: state.espn.espnSchedule,
    }
}

export default connect(mapStateToProps, { setEspnWeek })((Espn1))