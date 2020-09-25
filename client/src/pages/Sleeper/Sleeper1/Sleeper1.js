import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchLeagues } from '../../../actions/Sleeper';

import { Jumbotron } from 'reactstrap';

class Sleeper1 extends Component {
    constructor() {
        super()
        this.state = {
            input: ""
        }
    }

    handleChange = (e) => {
        let regex = /^[A-Za-z0-9 ]+$/;

        let isValid = regex.test(e.target.value);
        if (!isValid) {

        } else {
            this.setState({ input: e.target.value });
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.input)
        this.props.fetchLeagues(this.state.input, this.props.sleeperYear)
    }

    render() {
        return (
            <Jumbotron className="sleeper__jumbotron">
                <div className="sleeper__helpertext">
                    <p className="bold">
                        First enter your username here!
                    </p>
                    <p>
                        (You can use my username if you want to test it out: <b>wongman</b>)
                    </p>
                </div>
                <form onSubmit={this.onSubmit} className="sleeperForm">
                        <input
                            className="sleeper__input"
                            onChange={this.handleChange}
                            value={this.state.input}
                            autoComplete="off"
                            placeholder="Username" 
                        />
                    <button onClick={this.onSubmit} type="button" className="btn btn--sleeper">Submit</button>
                </form>
            </Jumbotron>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        nullUsername: state.nullUsername,
        sleeperYear: state.sleeper.sleeperYear,
     }
}

export default connect(mapStateToProps, { fetchLeagues })((Sleeper1))