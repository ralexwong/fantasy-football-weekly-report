import React, { Component } from "react";
import { connect } from 'react-redux';
import { setEspnSeason, setEspnTitle, setEspnCaption } from '../../actions/Espn';
import { setSleeperSeason, setSleeperTitle, setSleeperCaption } from '../../actions/Sleeper';

class OptionalInput extends Component {
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
        console.log(this.state.input);
    
        if (this.props.platform === 'sleeper') {
            if (this.props.input === 'Season') {
                this.props.setSleeperSeason(this.state.input);
            } else if (this.props.input === 'Caption') {
                this.props.setSleeperCaption(this.state.input)
            } else if (this.props.input === 'Title') {
                this.props.setSleeperTitle(this.state.input)
            }
        } else if (this.props.platform === 'espn') {
            if (this.props.input === 'Season') {
                this.props.setEspnSeason(this.state.input);
            } else if (this.props.input === 'Caption') {
                this.props.setEspnCaption(this.state.input)
            } else if (this.props.input === 'Title') {
                this.props.setEspnTitle(this.state.input)
            }
        }
    }


    render() {
        return (
            <>
                <form onSubmit={this.onSubmit} className="espnForm">
                    <input
                        className="sleeper__input"
                        onChange={this.handleChange}
                        autoComplete="off"
                        placeholder={this.props.input} 
                        value={this.state.input}
                    />
                </form>
                <button onClick={this.onSubmit} type="button" className={this.props.platform === 'sleeper' ? "btn btn--sleeper" : "btn btn--espn"}>Submit</button>
            </>
        )
    }
}

export default connect(null, { 
    setEspnSeason, 
    setSleeperSeason,
    setEspnTitle, 
    setEspnCaption,
    setSleeperTitle, 
    setSleeperCaption
 })(OptionalInput)
