import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchLeagues } from '../../../actions/Sleeper';

import { Jumbotron } from 'reactstrap';

class Sleeper1 extends Component {
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

        let regex = /^[A-Za-z0-9 ]+$/;

        let isValid = regex.test(this.state.input);
        if (!isValid) {
            alert('Invalid characters')
        } else {
            this.props.fetchLeagues(this.state.input, this.props.sleeperYear)
        }

    }

    onLoading = () => {
        this.setState({ loading: true });
        setTimeout(() => { 
            this.setState({ loading: false })
        }, 
        1000);
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
                            required
                            maxLength="25"
                            className="sleeper__input"
                            onChange={this.handleChange}
                            value={this.state.input}
                            autoComplete="off"
                            placeholder="Username" 
                        />
                    {this.state.loading ? (
                        <button class="btn btn--sleeper" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button>
                    ) : (
                        <button onClick={this.onSubmit} type="button" className="btn btn--sleeper">Submit</button>
                    )
                    
                }
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