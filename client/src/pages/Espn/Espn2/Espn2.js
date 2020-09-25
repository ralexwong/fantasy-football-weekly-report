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
        this.props.fetchEspn(this.state.input, this.props.espnYear)
    }

    render() {
        return (
            <Jumbotron className="sleeper__jumbotron">
                <p className="sleeper__helpertext">
                    Please enter your ESPN league ID
                    <br />
                    (You can use my espn league if you want to try it out: <b>20294539</b>)
                </p>
                <form onSubmit={this.onSubmit} className="espnForm">
                    <input
                        className="sleeper__input"
                        onChange={this.handleChange}
                        autoComplete="off"
                        placeholder="ID" 
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
        espnYear: state.espn.espnYear,
    }
}

export default connect(mapStateToProps, { fetchEspn })((Espn2))
