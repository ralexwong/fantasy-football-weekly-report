import React, { Component } from "react";
import { connect } from 'react-redux';
import { setEspnTitle } from '../../actions/Espn';
import { setSleeperTitle } from '../../actions/Sleeper';

import { Jumbotron } from 'reactstrap';

class TitleInput extends Component {
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

        if (this.props.platform === 'sleeper') {
            this.props.setSleeperTitle(this.state.input);
        } else if (this.props.platform === 'espn') {
            this.props.setEspnTitle(this.state.input);
        }
    }

    render() {
        return (
            <Jumbotron>
                <div className="sleeperInput__helpertext">
                    <p className="bold">
                        Title
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

export default connect(mapStateToProps, { setEspnTitle, setSleeperTitle })(TitleInput)