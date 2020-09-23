import React, { Component } from "react";
import { connect } from 'react-redux';
import { setEspnSeason } from '../../actions/Espn';
import { setSleeperSeason } from '../../actions/Sleeper';

import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));

class SeasonInput extends Component {
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
            this.props.setSleeperSeason(this.state.input);
        } else if (this.props.platform === 'espn') {
            this.props.setEspnSeason(this.state.input);
        }
    }


    render() {
        const { classes } = this.props;
        return (
            <>
                <form onSubmit={this.onSubmit} className={classes.root} noValidate autoComplete="off">
                    <TextField
                     id="outlined-basic" 
                     label="Season" 
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

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, { setEspnSeason, setSleeperSeason })(withStyles(useStyles)(SeasonInput))
