import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchMatchupPoints } from '../../../actions/Sleeper';

import { Jumbotron } from 'reactstrap';

class Sleeper3 extends Component {
    constructor() {
        super()
        this.state = {
            week: ""
        }
    }

    handleChange = (event) => {
        const { maxLength } = event.target;
        const message = event.target.value.slice(0, maxLength);

        this.setState({ week: message });
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.week);
        this.props.fetchMatchupPoints(this.state.week, this.props.league_id, this.props.league_info);
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
                        required
                        maxlength="2"
                        className="sleeper__input"
                        onChange={this.handleChange}
                        autoComplete="off"
                        placeholder="Week"
                        type="number"
                        value={this.state.input}
                    />
                    <button onClick={this.onSubmit} type="button" className="btn btn--sleeper">Submit</button>
                </form>
            </Jumbotron>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        league_id: state.sleeper.league_id,
        league_info: state.sleeper.league_info
    }
}

export default connect(mapStateToProps, { fetchMatchupPoints })((Sleeper3))