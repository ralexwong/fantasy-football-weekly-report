import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchEspn } from '../../../actions/Espn';

import { Jumbotron } from 'reactstrap';

class Espn1 extends Component {
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
        console.log(this.state.input);
        this.props.fetchEspn(this.state.input, this.props.espnYear);
    }

    onLoading = () => {
        this.setState({ loading: true });
        setTimeout(() => { 
            this.setState({ loading: false })
        }, 
        1500);
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
                        required
                        maxlength="10"
                        className="sleeper__input"
                        onChange={this.handleChange}
                        autoComplete="off"
                        placeholder="ID" 
                        type="number"
                        value={this.state.input}
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
        espnYear: state.espn.espnYear,
    }
}

export default connect(mapStateToProps, { fetchEspn })((Espn1))
