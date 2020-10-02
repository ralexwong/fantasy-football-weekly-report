import React, { Component } from "react";
import { connect } from 'react-redux';
import { setEspnWeek } from '../../../actions/Espn';

import { Jumbotron } from 'reactstrap';

class Espn2 extends Component {
    constructor() {
        super()
        this.state = {
            input: "",
            loading: false
        }
    }
    handleChange = (event) => {
        const { maxLength } = event.target;
        const message = event.target.value.slice(0, maxLength);
        
        this.setState({ input: message });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.onLoading();
        this.props.setEspnWeek(
            parseInt(this.state.input), 
            this.props.espn, 
            this.props.espnSchedule
        )
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
                <p className="sleeper__helpertext">
                    Please enter the week
                </p>
                <form onSubmit={this.onSubmit} className="espnForm">
                    <input
                        required
                        className="sleeper__input"
                        onChange={this.handleChange}
                        autoComplete="off"
                        placeholder={this.props.espnWeek ? this.props.espnWeek : "Week"}
                        type="number"
                        value={this.state.input}
                        maxLength={2}
                    />
                {this.state.loading ? (
                        <button class="btn btn--espn" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button>
                    ) : (
                        <button onClick={this.onSubmit} type="button" className="btn btn--espn">Submit</button>
                    )
                }
                </form>
            </Jumbotron>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        espn: state.espn.espn,
        espnSchedule: state.espn.espnSchedule,
        espnWeek: state.espn.espnWeek,
    }
}

export default connect(mapStateToProps, { setEspnWeek })((Espn2))