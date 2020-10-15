import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchMatchupPoints } from '../../../actions/Sleeper';

import { Jumbotron } from 'reactstrap';

class Sleeper3 extends Component {
    constructor() {
        super()
        this.state = {
            week: "",
            loading: false
        }
    }

    handleChange = (event) => {
        const { maxLength } = event.target;
        const message = event.target.value.slice(0, maxLength);

        if (message < 1) {

        } else {
            this.setState({ week: message });
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.onLoading();
        console.log(this.state.week);
        this.props.fetchMatchupPoints(this.state.week, this.props.league_id, this.props.league_info);
    }

    onLoading = () => {
        this.setState({ loading: true });
        setTimeout(() => { 
            this.setState({ loading: false })
        }, 
        2000);
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
                        maxLength="2"
                        className="sleeper__input"
                        onChange={this.handleChange}
                        autoComplete="off"
                        placeholder={this.props.sleeperWeek ? this.props.sleeperWeek : 'Week'}
                        type="number"
                        value={this.state.input}
                    />
                    <p className='helperText'></p>
                    {this.state.loading ? (
                        <button class="btn btn--sleeper" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button>
                    ) : (
                        <button onClick={this.onSubmit} type="button" className="btn btn--sleeper">Submit</button>
                    )}
                </form>
            </Jumbotron>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        league_id: state.sleeper.league_id,
        league_info: state.sleeper.league_info,

        sleeperWeek: state.sleeper.sleeperWeek
    }
}

export default connect(mapStateToProps, { fetchMatchupPoints })((Sleeper3))