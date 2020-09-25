import React, { Component } from "react";
import { connect } from 'react-redux';
import { setEspnYear } from '../../actions/Espn';
import { setSleeperYear } from '../../actions/Sleeper';

import { Jumbotron } from 'reactstrap';

class YearInput extends Component {
    constructor() {
        super()
        this.state = {
            input: 2020
        }
    }
    

    handleChange = (e) => {
        this.setState({ input: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.input);

        if (this.props.platform === 'sleeper') {
            this.props.setSleeperYear(this.state.input);
        } else if (this.props.platform === 'espn') {
            this.props.setEspnYear(this.state.input);
        }
    }

    render() {
        return (
            <Jumbotron className='sleeper__jumbotron'>
                <div className="sleeper__helpertext">
                    <p className="bold">
                        The year will default to the current season's year
                    </p>
                </div>
                <form onSubmit={this.onSubmit} className="espnForm">
                    <input
                        className="sleeper__input"
                        onChange={this.handleChange}
                        autoComplete="off"
                        placeholder="Year" 
                        value={this.state.input}
                        type="number"
                        />
                    <button onClick={this.onSubmit} type="button" className="btn btn--sleeper">Submit</button>
                </form>
            </Jumbotron>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, { setEspnYear, setSleeperYear })(YearInput)
