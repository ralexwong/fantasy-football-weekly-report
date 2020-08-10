import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchEspn } from '../../../actions/Espn';

import { Jumbotron } from 'reactstrap';

class Espn2 extends Component {
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
        console.log(this.state.input);
        this.props.fetchEspn(this.state.input)
    }

    render() {
        return (
            <Jumbotron>
                <div className="sleeperInput__helpertext">
                    <p className="bold">
                        Please enter your ESPN league ID
                    </p>
                </div>
                <form onSubmit={this.onSubmit} className="espnForm">
                    <input
                        className="sleeper__input"
                        onChange={this.handleChange}
                        autoComplete="off"
                        placeholder="ID" />
                    <button onClick={this.onSubmit} type="button" className="btn btn--blue">Submit</button>
                </form>
            </Jumbotron>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, { fetchEspn })((Espn2))
