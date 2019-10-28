import React, { Component } from "react";
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { fetchMatchupPoints, setWeekToState } from '../../actions';

import Container from "react-bootstrap/Container";

class Input3 extends Component {
    componentDidMount() {
        
    }

    // takes descontructed props from <Field>
    renderInput = ({ input, label, meta }) => {    
        // console.log(meta)
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
            </div>
        ); // {...input} === onChange={formProps.input.onChange}  value={formProps.input.value}
    }

    onSubmit = (formValues) => {
        console.log(formValues.week);   
        this.props.fetchMatchupPoints(formValues.week, this.props.league_id);
        this.props.setWeekToState(formValues.week)
    }

  render() {
    return (
      <Container>
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="week" component={this.renderInput} label="Enter Week" />
                <button className="ui button primary">Submit</button>
            </form>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
    return { league_id: state.sleeper.league_id }
}

export default connect(mapStateToProps, { fetchMatchupPoints, setWeekToState })(reduxForm({
    form: 'user'
})(Input3))