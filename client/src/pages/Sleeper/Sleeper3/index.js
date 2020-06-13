import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchMatchupPoints, setWeekToState } from '../../../actions/Sleeper';

import { Jumbotron } from 'reactstrap';


class Sleeper3 extends Component {
    constructor() {
        super()
        this.state = {
            week: ""
        }
    }

    handleChange = (e) => {
        this.setState({ week: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.week);
        this.props.fetchMatchupPoints(this.state.week, this.props.league_id);
        this.props.setWeekToState(this.state.week)
    }

    render() {
        return (
            <Jumbotron className="sleeper__jumbotron">
                <div className="sleeper__helpertext">
                    <p className="bold">
                        Select a week!
                    </p>
                </div>
                <form onSubmit={this.onSubmit} className="ui form error">
                    <input
                        className="sleeper__input"
                        onChange={this.handleChange}
                        autoComplete="off"
                        placeholder="Week" />
                    <button onClick={this.onSubmit} type="button" className="btn btn--blue">Submit</button>
                </form>
            </Jumbotron>
        )
    }
}

const mapStateToProps = (state) => {
    return { league_id: state.sleeper.league_id }
}

export default connect(mapStateToProps, { fetchMatchupPoints, setWeekToState })((Sleeper3))