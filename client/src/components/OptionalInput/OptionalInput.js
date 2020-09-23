import React, { Component } from "react";
import { connect } from 'react-redux';
import { setEspnSeason, setEspnTitle, setEspnCaption } from '../../actions/Espn';
import { setSleeperSeason, setSleeperTitle, setSleeperCaption } from '../../actions/Sleeper';

import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

class OptionalInput extends Component {
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
            if (this.props.input === 'season') {
                this.props.setSleeperSeason(this.state.input);
            } else if (this.props.input === 'caption') {
                this.props.setSleeperCaption(this.state.input)
            } else if (this.props.input === 'title') {
                this.props.setSleeperTitle(this.state.input)
            }
        } else if (this.props.platform === 'espn') {
            if (this.props.input === 'season') {
                this.props.setEspnSeason(this.state.input);
            } else if (this.props.input === 'caption') {
                this.props.setEspnCaption(this.state.input)
            } else if (this.props.input === 'title') {
                this.props.setEspnTitle(this.state.input)
            }
        }
    }


    render() {
        const { classes } = this.props;
        return (
            <>
                <form onSubmit={this.onSubmit} className={classes.root} noValidate autoComplete="off">
                    <TextField
                     id="outlined-basic" 
                     label={this.props.input}
                     variant="outlined" 
                     onChange={this.handleChange}
                     autoComplete="off"
                     placeholder="1"
    
                    />
                </form>
                <button onClick={this.onSubmit} type="button" className="btn btn--blue">Submit</button>
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
 })
 (withStyles(useStyles)(OptionalInput))
